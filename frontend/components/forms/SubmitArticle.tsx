import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

interface ArticleFormData {
    title: string;
    content: string;
    category: string;
    image: FileList | null;
}


const SubmitArticle = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ArticleFormData>(); // Use the type here
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const onSubmit: SubmitHandler<ArticleFormData> = async (data) => {
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("content", data.content);
            formData.append("category", data.category);
            if (data.image && data.image[0]) {
                formData.append("image", data.image[0]);
            }

            const response = await axios.post("/api/articles", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Article Created:", response.data);
        } catch (error) {
            console.error("Error uploading article", error);
        }
    };

    // Handle image preview
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="title">Title</label>
                <input
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    id="title"
                    className="input"
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <input
                    {...register("category", { required: "Category is required" })}
                    type="text"
                    id="category"
                    className="input"
                />
                {errors.category && <p>{errors.category.message}</p>}
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    {...register("content", { required: "Content is required" })}
                    id="content"
                    rows={5}
                    className="input"
                />
                {errors.content && <p>{errors.content.message}</p>}
            </div>

            <div>
                <label htmlFor="image">Upload Image</label>
                <input
                    {...register("image", { required: "Image is required" })}
                    type="file"
                    accept="image/*"
                    id="image"
                    onChange={handleImageChange}
                    className="input"
                />
                {imagePreview && <img src={imagePreview} alt="Image Preview" className="mt-2" />}
                {errors.image && <p>{errors.image.message}</p>}
            </div>

            <button type="submit" className="btn">Submit</button>
        </form>
    );
};

export default SubmitArticle;
