const companies = ["Googlee", "Amazon", "Figma", "Meta", "Netflix", "Microsoft", "Pinterest", "Slack", "Spotify", "Oracle", "Walmart"];
const jobCategory = [
    {
      "name": "Digital Marketing",
      "image": "Digital Marketing.png",
      "description": "Explore roles in SEO, SEM, content strategy and more.",
      "jobs": "1K+ New Jobs Posted"
    },
    {
      "name": "Arts & Design",
      "image": "Arts & Design.png",
      "description": "Creative opportunities in graphic design, illustration and visual arts.",
      "jobs": "800+ New Jobs Posted"
    },
    {
      "name": "Content Writing",
      "image": "Content Writing.png",
      "description": "Craft compelling stories, blogs, and marketing copy for brands.",
      "jobs": "650+ New Jobs Posted"
    },
    {
      "name": "Customer Support",
      "image": "Customer Support.png",
      "description": "Help users solve problems and enhance their product experience.",
      "jobs": "1.2K+ New Jobs Posted"
    },
    {
      "name": "Data Entry",
      "image": "Data Entry.png",
      "description": "Accurate data management and processing roles across industries.",
      "jobs": "500+ New Jobs Posted"
    },
    {
      "name": "Finance",
      "image": "Finance.png",
      "description": "Accounting, analysis, and financial planning opportunities.",
      "jobs": "900+ New Jobs Posted"
    },
    {
      "name": "Human Resource",
      "image": "Human Resource.png",
      "description": "Talent acquisition, employee relations, and HR management roles.",
      "jobs": "750+ New Jobs Posted"
    },
    {
      "name": "Sales",
      "image": "Sales.png",
      "description": "Drive business growth through B2B and B2C sales opportunities.",
      "jobs": "1.5K+ New Jobs Posted"
    },
    {
      "name": "UI-UX Designer",
      "image": "UI-UX Designer.png",
      "description": "Create intuitive, engaging user experiences for digital products.",
      "jobs": "950+ New Jobs Posted"
    },
    {
      "name": "Web Developer",
      "image": "Web Developer.png",
      "description": "Build and maintain websites and web applications using modern tech.",
      "jobs": "2K+ New Jobs Posted"
    }
  ];

  const work=[
    {
      "name":"Build Your Resume",
      "desc":"Create a standout resume which reflects your skills."
    },
    {
      "name":"Apply For Job",
      "desc":"Find and  apply for the jobs that match your skills."
    },
    {
      "name":"Get Hired",
      "desc":"Connect with recruiters and start your new job."
    }
  ];

  const testimonials=[
    {
        "name":"Sumit Gupta",
        "desc":"This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating":5,
        "avatar":"avatar.png"
    },
    {
        "name":"Abhishek Kumar",
        "desc":"Found my dream job within a week!.The application process was smooth",
        "rating":4,
        "avatar":"avatar.png"
    },
    {
        "name":"shruti Bansal",
        "desc":"It's one of the best job portal I've used. Loved it so much!",
        "rating": 4.5,
        "avatar":"avatar2.png"
    },
    {
        "name":"Shreya Sharma",
        "desc":"I secured a job offer within days of applying. Exceptional user experience and support!",
        "rating":3.5,
        "avatar":"avatar1.png"
    }
]

const footerLinks=[
    {title:"Product", link:["Find Job","Find Company","Find Employee"]},
    {title:"Company", link:["About us","Contact us","Privacy Policy","Terms and Conditions"]},
    {title:"Support", link:["Help & Support","Feedback","FAQs"]}
]

export default { companies, jobCategory, work, testimonials, footerLinks };