// careers.context.tsx

export const careersPageData = {
  hero: {
    title: "Join Our Team",
    subtitle:
      "Build products people love. Learn fast, ship often, and grow with SGCA Technologies.",
    cta: [
      {
        label: "See Open Roles",
        href: "#roles",
        variant: "primary",
      },
      {
        label: "How to Apply",
        href: "#apply",
        variant: "secondary",
      },
    ],
  },

  whySGCA: {
    title: "Why SGCA",
    subtitle: "A place to do your best work and become your best self.",
    items: [
      {
        title: "Impactful Work",
        description:
          "Build real-world products that ship to customers and create measurable value.",
        icon: "check-circle",
      },
      {
        title: "Collaborative Culture",
        description:
          "Work with a humble, high-performing team that cares about outcomes.",
        icon: "users",
      },
      {
        title: "Continuous Learning",
        description:
          "Access to mentorship, certifications, and time for deep work.",
        icon: "graduation-cap",
      },
      {
        title: "Modern Stack",
        description:
          "Ship with TypeScript, cloud-native services, and pragmatic AI.",
        icon: "laptop",
      },
    ],
  },

  roles: {
    id: "roles",
    title: "Open Roles",
    subtitle:
      "Don’t see a perfect match? Reach out anyway — we love meeting great people.",
    positions: [
      {
        title: "Full-Stack Engineer (React/Node)",
        type: "Full-time",
        location: "Noida / Remote",
        description:
          "Own end-to-end features across React, Node, and cloud. You care about DX, testing, and delivering value quickly.",
        requirements: [
          "2+ years experience with React and Node",
          "Comfortable with TypeScript and REST/GraphQL",
          "Experience with databases (SQL/NoSQL) and CI/CD",
        ],
        applyCta: {
          label: "Apply Now",
          href: "#apply",
        },
      },
      {
        title: "Mobile Developer (React Native)",
        type: "Full-time",
        location: "Noida / Remote",
        description:
          "Build high-quality mobile apps with React Native. Work closely with design and backend teams to ship delightful UX.",
        requirements: [
          "2+ years with React Native",
          "Familiar with native modules and app store releases",
          "Performance profiling and testing experience",
        ],
        applyCta: {
          label: "Apply Now",
          href: "#apply",
        },
      },
      {
        title: "AI Engineer",
        type: "Full-time",
        location: "Noida / Remote",
        description:
          "Prototype and productionize AI features using LLMs, vector search, and prompt engineering with strong evaluation.",
        requirements: [
          "Hands-on with Python/Node for AI tooling",
          "Familiarity with embeddings, RAG, and model evaluation",
          "Comfortable shipping to production with observability",
        ],
        applyCta: {
          label: "Apply Now",
          href: "#apply",
        },
      },
    ],
  },

  benefits: {
    title: "Benefits",
    subtitle:
      "We support you to do your best work — in and out of the office.",
    items: [
      {
        title: "Flexible Hours",
        icon: "sparkles",
      },
      {
        title: "Hybrid/Remote Options",
        icon: "laptop",
      },
      {
        title: "Mentorship & Growth",
        icon: "graduation-cap",
      },
      {
        title: "Supportive Culture",
        icon: "heart-handshake",
      },
    ],
  },

  apply: {
    id: "apply",
    title: "Ready to build with us?",
    description:
      "Send your resume and a short note about what excites you to info@sgca.live.",
    email: "info@sgca.live",
    cta: {
      label: "Apply via Email",
      href: "mailto:info@sgca.live",
    },
  },
};
