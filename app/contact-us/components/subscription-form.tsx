"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod"


const formSchema = z.object({
    email: z.string().min(1).regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
})

export type EmailSubscriptionFormValues = z.infer<typeof formSchema>

const EmailSubscriptionForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<EmailSubscriptionFormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: EmailSubscriptionFormValues) => {
        try {
            setLoading(true);
            // Send a POST request to the server with the form data

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions`, {
                method: 'POST',
                body: JSON.stringify(data),
            });
            toast.success("Subscription successful!");
            reset();
            router.refresh();
        } catch (error) {
            // Show error toast if there's an issue with the request
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-2">Newsletter</h2>
                <form onSubmit={handleSubmit(onSubmit)} id="form">
                    <div className="mb-4 flex">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email here"
                            className="border border-gray-300 bg-white px-3 py-2 w-full text-sm text-black"
                            {...register('email', { required: 'Email is required' })}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="button"
                        >
                            {loading ? 'Submitting...' : 'Subscribe'}
                        </button>
                    </div>
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                </form>
            </div>
        </>

    );
};

export default EmailSubscriptionForm;
