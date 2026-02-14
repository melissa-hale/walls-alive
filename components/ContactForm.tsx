"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...data,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-sage-100">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      {success && (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 border border-green-200">
          Thank you! Don has received your message and will be in touch shortly.
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6 border border-red-200">
          Something went wrong. Please try again or email directly at auto_don@zohomail.com.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-sage-700 mb-2">Name</label>
          <input 
            {...register("name", { required: true })} 
            className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 outline-none bg-cream-50"
            placeholder="Jane Doe"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-sage-700 mb-2">Phone</label>
          <input 
            {...register("phone", { required: true })} 
            className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 outline-none bg-cream-50"
            placeholder="(512) 555-0123"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-700 mb-2">Email</label>
        <input 
          type="email"
          {...register("email", { required: true })} 
          className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 outline-none bg-cream-50"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-700 mb-2">Project Type</label>
        <select 
          {...register("projectType")}
          className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 outline-none bg-cream-50"
        >
          <option value="Residential Installation">Residential Installation</option>
          <option value="Commercial Installation">Commercial Installation</option>
          <option value="Custom Mural">Custom Mural</option>
          <option value="Wallpaper Removal">Wallpaper Removal</option>
          <option value="Consultation">Design Consultation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-700 mb-2">Message</label>
        <textarea 
          {...register("message")} 
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 outline-none bg-cream-50"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-sage-600 hover:bg-sage-700 text-cream-50 font-bold py-4 rounded-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}