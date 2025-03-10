'use client';

import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsWidgetProps {
    title: string;
    value: number;
    change?: number;
    icon?: React.ReactNode;
    trend?: 'up' | 'down' | 'neutral';
}

export default function StatsWidget({ title, value, change, icon, trend = 'neutral' }: StatsWidgetProps) {
    const getTrendColor = () => {
        switch (trend) {
            case 'up':
                return 'text-green-600';
            case 'down':
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                    <p className="text-2xl font-semibold text-gray-900">{value.toLocaleString()}</p>
                </div>
                {icon && (
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        {icon}
                    </div>
                )}
            </div>

            {change !== undefined && (
                <div className="mt-4 flex items-center">
                    <span className={`flex items-center text-sm ${getTrendColor()}`}>
                        {trend === 'up' ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                        ) : trend === 'down' ? (
                            <ArrowDown className="h-4 w-4 mr-1" />
                        ) : null}
                        {Math.abs(change)}%
                    </span>
                    <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
            )}
        </motion.div>
    );
}
