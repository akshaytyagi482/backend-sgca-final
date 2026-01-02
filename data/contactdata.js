// contact.context.tsx

export const contactPageData = {
  hero: {
    title: "Get in Touch",
    subtitle: "Let's discuss how we can help transform your business",
  },

  form: {
    title: "Contact Form",
    fields: [
      {
        id: "name",
        label: "Name",
        type: "text",
        placeholder: "",
        required: true,
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "",
        required: true,
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        rows: 4,
        required: true,
      },
    ],
    submitButton: {
      label: "Send Message",
    },
  },

  contactInfo: [
    {
      type: "email",
      title: "Email",
      value: "info@sgca.live",
      icon: "mail",
    },
    {
      type: "phone",
      title: "Phone",
      value: "+91 7289892009",
      icon: "phone",
    },
    {
      type: "address",
      title: "Address",
      value: {
        line1: "Noida One",
        line2: "Sector 62, Noida 201309",
      },
      icon: "map-pin",
    },
  ],
};
