"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod"


const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1).regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
})

export type EmailSubscriptionFormValues = z.infer<typeof formSchema>

const EmailSubscriptionForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        handleSubmit,
        register,
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

            router.refresh();
            router.push(`/`)
            toast.success("Subscription successful!");
        } catch (error) {
            // Show error toast if there's an issue with the request
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen">

            <div className="mb-8">
            <pre className=" text-[5px] md:text-xs font-bold">
    {`                                                                        
  ####    ####   #    #  #####    ##     ####   #####      #    #   ##### 
  #    #  #    #  ##   #    #     #  #   #    #    #        #    #  #      
  #       #    #  # #  #    #    #    #  #         #        #    #   ####  
  #       #    #  #  # #    #    ######  #         #        #    #       # 
  #    #  #    #  #   ##    #    #    #  #    #    #        #    #  #    # 
   ####    ####   #    #    #    #    #   ####     #         ####    ####  
    `}
        </pre>
            </div>

            <div className="max-w-md p-6 shadow-2xl rounded-md">
                <h2 className="title text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
                <p className="mb-6 text-sm">Stay up-to-date with our latest events and news.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="border border-gray-300 bg-white rounded px-3 py-2 w-full"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Personal email or school email"
                            className="border border-gray-300 bg-white rounded px-3 py-2 w-full"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#E981D9] hover:bg-[#DCA7EE] text-white font-bold py-2 px-4 rounded"
                        >
                            {loading ? 'Submitting...' : 'Subscribe'}
                        </button>
                    </div>

                </form>
            </div>
            <div className="mt-6 justify-center">

                <h2 className="text-xl font-bold mb-2">Follow Us On</h2>
                <div className="flex space-x-4 justify-center">
                    <Link href="https://www.instagram.com/unm.css/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} className="text-[#E981D9]" />
                    </Link>
                    <Link href="https://www.facebook.com/CSSocietyUNM" target="_blank" rel="noopener noreferrer">
                        <Facebook size={24} className="text-[#E981D9]" />
                    </Link>
                    <Link href="https://github.com/UoN-Computer-Science-Society" target="_blank" rel="noopener noreferrer">
                        <Github size={24} className="text-[#E981D9]" />
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default EmailSubscriptionForm;
