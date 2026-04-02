import { Input } from "@/components/ui/input";


const Contact = () => {
  return (
    <div className="md:px-80 px-5 py-10 border-t border-gray-200">
      <h1 className="text-4xl font-light">Contact</h1>

      <div className="mt-10">
       <form>
        <div className="mb-4 md:flex md:gap-4 space-y-3">  
         <Input
          placeholder="Name"
          type="text"
          id="name"
          className="mt-1 block h-13 w-full rounded-none p-3 border border-black"
         />
         <Input
          placeholder="Email"
          type="email"
          id="email"
          required
          className="mt-1 block h-13 w-full rounded-none p-3 border border-black"
         />
         </div>

        <div className="mb-4">
         <Input
          placeholder="Phone number"
          id="phoneNumber"
          className="mt-1 block h-13 w-full rounded-none p-3 border border-black"
         />
        </div>

        <div className="mb-4">
         <textarea
          placeholder="Comment"
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-none p-3 border border-black"
         />
        </div>
        <button
         type="submit"
         className="inline-flex items-center px-10 py-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#bc3fcc] hover:bg-[#c34ad3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
         Send
        </button>
       </form> 
      </div>
    </div>
  )
}

export default Contact;
