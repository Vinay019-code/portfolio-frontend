// import axios from "axios";
// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({ name:"", email:"", message:"" });

//   const submit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/contact", form);
//     alert("Message sent!");
//   };

//   return (

//     <form className="pt-52 pb-10 flex flex-col  h-screen gap-4 max-w-md mx-auto" id="contact" onSubmit={submit} >
//       <input className="p-3 rounded bg-white/10" placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
//       <input  className="p-3 rounded bg-white/10" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
//       <textarea className="p-3 rounded bg-white/10" placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})}/>
//       <button  className="bg-white   max-w-32 text-black p-3 rounded-3xl"> Send</button>
      
//     </form>
//   );
// }




import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    // ✅ Basic Validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        form
      );

      alert(res.data.message || "Message sent!");

      // ✅ Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="pt-52 pb-10 flex flex-col h-screen gap-4 max-w-md mx-auto"
      id="contact"
      onSubmit={submit}
    >
      <input
        className="p-3 rounded bg-white/10"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="p-3 rounded bg-white/10"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <textarea
        className="p-3 rounded bg-white/10"
        placeholder="Message"
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-white max-w-32 text-black p-3 rounded-3xl hover:bg-gray-200 transition"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}





/* <form >
  <input  placeholder="Name" />
  <input placeholder="Email" />
  <textarea  placeholder="Message" />
  <button>Send</button>
</form> */

// import { useState } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/contact",
//         form
//       );

//       alert(res.data.message);
//     } catch (error) {
//       console.log(error);
//       alert("Error sending message");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//         className="w-full p-2"
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         className="w-full p-2"
//       />

//       <textarea
//         name="message"
//         placeholder="Message"
//         onChange={handleChange}
//         className="w-full p-2"
//       />

//       <button type="submit" className="bg-blue-500 px-4 py-2">
//         Send
//       </button>
//     </form>
//   );
// };

// export default Contact;


