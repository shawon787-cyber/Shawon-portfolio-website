// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Send, Mail, Loader2 } from "lucide-react";
// import { z } from "zod";
// import { toast } from "sonner";
// import { supabase } from "@/integrations/supabase/client";
// import SectionTitle from "./SectionTitle";

// const schema = z.object({
//   name: z.string().trim().min(2, "Name too short").max(100),
//   email: z.string().trim().email("Invalid email").max(255),
//   subject: z.string().trim().max(200).optional(),
//   message: z.string().trim().min(10, "Message too short").max(2000),
// });

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const parsed = schema.safeParse(form);
//     if (!parsed.success) {
//       toast.error(parsed.error.issues[0].message);
//       return;
//     }
//     setLoading(true);
//     const { error } = await supabase.from("contact_messages").insert({
//       name: parsed.data.name,
//       email: parsed.data.email,
//       subject: parsed.data.subject || null,
//       message: parsed.data.message,
//     });
//     setLoading(false);
//     if (error) {
//       toast.error("Failed to send. Please try again.");
//       return;
//     }
//     toast.success("Message received! I'll be in touch shortly.");
//     setForm({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <section id="contact" className="relative py-24 px-6">
//       <div className="max-w-3xl mx-auto text-center">
//         <SectionTitle num="Get" title="In Touch" />

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-muted-foreground max-w-xl mx-auto -mt-6 mb-10"
//         >
//           Have a project in mind, a role to fill, or just want to say hi? My inbox is always open —
//           I'll get back to you as soon as I can.
//         </motion.p>

//         <motion.form
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           onSubmit={handleSubmit}
//           className="glass rounded-2xl p-6 sm:p-8 text-left space-y-5"
//         >
//           <div className="grid sm:grid-cols-2 gap-5">
//             <Field
//               label="Name"
//               value={form.name}
//               onChange={(v) => setForm({ ...form, name: v })}
//               placeholder="Your name"
//             />
//             <Field
//               label="Email"
//               type="email"
//               value={form.email}
//               onChange={(v) => setForm({ ...form, email: v })}
//               placeholder="you@email.com"
//             />
//           </div>
//           <Field
//             label="Subject"
//             value={form.subject}
//             onChange={(v) => setForm({ ...form, subject: v })}
//             placeholder="Project inquiry, collaboration, etc."
//           />
//           <div>
//             <label className="text-xs font-mono text-neon uppercase tracking-wider">Message</label>
//             <textarea
//               rows={5}
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               placeholder="Tell me about your project..."
//               className="mt-2 w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:shadow-neon-sm transition-all resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full inline-flex items-center justify-center gap-2 bg-neon/90 text-black px-8 py-3.5 rounded-md font-semibold shadow-[0_0_05px_#ccff00] hover:shadow-[0_0_15px_#ccff00] transition-all disabled:opacity-60"
//           >
//             {loading ? (
//               <>
//                 <Loader2 size={18} className="animate-spin" />
//                 Sending...
//               </>
//             ) : (
//               <>
//                 <Send size={18} />
//                 Send Message
//               </>
//             )}
//           </button>

//           <p className="text-xs text-muted-foreground flex items-center gap-2 pt-2">
//             <Mail size={14} className="text-neon" />
//             Or email directly:{" "}
//             <a href="mailto:shawonmohammad787@gmail.com" className="text-neon hover:underline">
//               shawonmohammad787@gmail.com
//             </a>
//           </p>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

// function Field({ label, value, onChange, placeholder, type = "text" }) {
//   return (
//     <div>
//       <label className="text-xs font-mono text-neon uppercase tracking-wider">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="mt-2 w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:shadow-neon-sm transition-all"
//       />
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import SectionTitle from "./SectionTitle";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Message too short").max(2000),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);

    // Fake submit delay
    setTimeout(() => {
      setLoading(false);

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle num="Get" title="In Touch" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto -mt-6 mb-10"
        >
          Have a project in mind, a role to fill, or just want to say hi? My inbox is always open —
          I'll get back to you as soon as I can.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8 text-left space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) =>
                setForm({
                  ...form,
                  name: v,
                })
              }
              placeholder="Your name"
            />

            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) =>
                setForm({
                  ...form,
                  email: v,
                })
              }
              placeholder="you@email.com"
            />
          </div>

          <Field
            label="Subject"
            value={form.subject}
            onChange={(v) =>
              setForm({
                ...form,
                subject: v,
              })
            }
            placeholder="Project inquiry, collaboration, etc."
          />

          <div>
            <label className="text-xs font-mono text-neon uppercase tracking-wider">Message</label>

            <textarea
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              placeholder="Tell me about your project..."
              className="mt-2 w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:shadow-neon-sm transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-neon/90 text-black px-8 py-3.5 rounded-md font-semibold shadow-[0_0_05px_#ccff00] hover:shadow-[0_0_15px_#ccff00] transition-all disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground flex items-center gap-2 pt-2">
            <Mail size={14} className="text-neon" />
            Or email directly:{" "}
            <a href="mailto:shawonmohammad787@gmail.com" className="text-neon hover:underline">
              shawonmohammad787@gmail.com
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="text-xs font-mono text-neon uppercase tracking-wider">{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:shadow-neon-sm transition-all "
      />
    </div>
  );
}
