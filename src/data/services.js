// Service content. Each entry powers a card, the navbar dropdown and the /services/<slug> page.
// TODO: review the copy and remove anything Delta Dragon doesn't offer.

export const services = [
  {
    slug: 'web-design',
    icon: 'design',
    title: 'Web Design',
    summary:
      'Customized solutions to create visually appealing, user-friendly, and functional websites.',
    headline: 'Custom website design that turns visitors into customers',
    intro: [
      'Your website is often the first impression a customer has of your business. We design custom, brand-aligned websites that look professional, explain what you do clearly, and guide visitors toward getting in touch.',
      "Every project starts with your goals and your audience — not a template. You see the design take shape through wireframes and mockups, and nothing moves into development until you're happy with it.",
    ],
    features: [
      {
        title: 'UI/UX design',
        text: 'Layouts planned around how your customers actually browse, so the next step is always obvious.',
      },
      {
        title: 'Responsive layouts',
        text: 'Designs tailored for mobile, tablet and desktop — not simply shrunk to fit.',
      },
      {
        title: 'Brand-aligned visuals',
        text: 'Colours, typography and imagery that match your identity and set you apart from competitors.',
      },
      {
        title: 'Landing pages',
        text: 'Focused pages built around a single offer or campaign to bring in more enquiries.',
      },
      {
        title: 'Wireframes & prototypes',
        text: 'Review structure and flow early, before a single line of code is written.',
      },
      {
        title: 'Website redesign',
        text: 'Refresh an outdated site while keeping the content and search visibility that already work.',
      },
    ],
    benefits: [
      {
        icon: 'brand',
        title: 'A stronger first impression',
        text: 'A polished, consistent design builds trust before you have said a word.',
      },
      {
        icon: 'chart',
        title: 'More enquiries',
        text: 'Clear messaging and well-placed calls to action turn visits into leads.',
      },
      {
        icon: 'device',
        title: 'Effortless on every device',
        text: 'Customers get the same smooth experience on a phone as on a desktop.',
      },
    ],
    idealFor: [
      'New businesses launching their first website',
      'Companies with an outdated or hard-to-use site',
      'Service providers who rely on enquiries',
      'Brands preparing a launch or campaign',
    ],
    faqs: [
      {
        q: 'How long does a website design take?',
        a: 'It depends on the number of pages and how quickly content and feedback come together. After our first conversation we give you a clear timeline and keep you updated at every stage.',
      },
      {
        q: 'Will I see the design before it is built?',
        a: 'Yes. You review wireframes and visual mockups first and can request changes. Development only begins once you have approved the design.',
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Yes. We review what is working on your current site, keep what is valuable, and rebuild the rest around a cleaner, more modern design.',
      },
      {
        q: 'Do you help with content and images?',
        a: 'We can work with what you already have, help structure your copy, and advise on imagery so the finished site feels consistent.',
      },
    ],
  },
  {
    slug: 'web-development',
    icon: 'code',
    title: 'Web Development',
    summary: 'Fast, secure and scalable websites and web apps built on modern stacks.',
    headline: 'Fast, reliable websites and web apps built to grow with you',
    intro: [
      'A great design only works if the site behind it is fast, stable and easy to manage. We build websites and web applications with clean, modern code that loads quickly, works across browsers and is straightforward to extend later.',
      'Whether you need a business website, a custom feature or a full web application, we choose the technology that fits your requirements — and hand over a product you fully own.',
    ],
    features: [
      {
        title: 'Front-end development',
        text: 'Responsive, accessible interfaces built with modern frameworks such as React.',
      },
      {
        title: 'Back-end & APIs',
        text: 'Custom server logic, databases and integrations that connect your site to the tools you use.',
      },
      {
        title: 'CMS integration',
        text: 'Update pages, posts and images yourself without touching code.',
      },
      {
        title: 'Performance optimisation',
        text: 'Lean code, optimised assets and caching so pages load quickly for real users.',
      },
      {
        title: 'Security best practices',
        text: 'Secure forms, protected data and dependable hosting setup from day one.',
      },
      {
        title: 'Maintenance & support',
        text: 'Updates, fixes and improvements after launch so your site keeps performing.',
      },
    ],
    benefits: [
      {
        icon: 'zap',
        title: 'Speed that keeps visitors',
        text: 'Fast pages reduce drop-off and give customers a better experience.',
      },
      {
        icon: 'shield',
        title: 'Built on solid foundations',
        text: 'Clean, well-structured code that is secure and easy to maintain.',
      },
      {
        icon: 'chart',
        title: 'Ready to scale',
        text: 'Add pages, features and integrations as your business grows.',
      },
    ],
    idealFor: [
      'Businesses that need custom functionality',
      'Teams replacing a slow or unreliable website',
      'Startups building a web application',
      'Companies that want to manage their own content',
    ],
    faqs: [
      {
        q: 'Which technologies do you use?',
        a: 'We choose the stack based on your project. Modern front-end frameworks such as React are our default for interactive sites, paired with the back-end and CMS that best fit your needs.',
      },
      {
        q: 'Will I be able to update the website myself?',
        a: 'Yes. Where content changes regularly we connect a content management system so you can edit text, images and pages without a developer.',
      },
      {
        q: 'Can you work with an existing design or codebase?',
        a: 'Yes. We can build from designs you already have, or take over and improve an existing website.',
      },
      {
        q: 'Do you offer support after launch?',
        a: 'Yes. We offer ongoing maintenance and support so your site stays secure, up to date and working as it should.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    icon: 'cart',
    title: 'E-Commerce',
    summary: 'Online stores designed to convert, from product page to checkout.',
    headline: 'Online stores designed to sell — from first click to checkout',
    intro: [
      'Selling online takes more than listing products. We design and build e-commerce stores that make it easy for customers to find what they want, trust what they see and complete their purchase without friction.',
      'From store setup and payment integration to product pages that convert, we handle the technical side so you can focus on running your business.',
    ],
    features: [
      {
        title: 'Store setup',
        text: 'A complete online store configured on the platform that best fits your business.',
      },
      {
        title: 'Payment integration',
        text: 'Secure checkout with the payment methods your customers prefer.',
      },
      {
        title: 'Product catalogues',
        text: 'Well-organised categories, filters and search so products are easy to find.',
      },
      {
        title: 'Conversion-focused pages',
        text: 'Product pages and carts designed to reduce hesitation and abandoned orders.',
      },
      {
        title: 'Mobile shopping experience',
        text: 'A smooth, thumb-friendly store for customers buying on their phones.',
      },
      {
        title: 'Orders & inventory',
        text: 'Simple tools to manage orders, stock and customers in one place.',
      },
    ],
    benefits: [
      {
        icon: 'cart',
        title: 'A smoother path to purchase',
        text: 'Fewer steps and clearer pages mean fewer abandoned carts.',
      },
      {
        icon: 'shield',
        title: 'Checkout customers trust',
        text: 'Secure payments and a professional storefront give buyers confidence.',
      },
      {
        icon: 'support',
        title: 'Easy to run day to day',
        text: 'Add products, update prices and process orders without technical help.',
      },
    ],
    idealFor: [
      'Retailers moving from a physical shop to online',
      'Brands launching a new product line',
      'Stores with a slow or confusing checkout',
      'Businesses outgrowing a marketplace listing',
    ],
    faqs: [
      {
        q: 'Which e-commerce platform will you use?',
        a: 'We recommend a platform based on your products, budget and how you want to manage the store, and explain the trade-offs before you decide.',
      },
      {
        q: 'Can you connect my preferred payment method?',
        a: 'In most cases, yes. Tell us which payment providers you need and we will confirm what is supported during planning.',
      },
      {
        q: 'Can you migrate my existing store?',
        a: 'Yes. We can move your products, customers and content to a new store and redirect old pages so you keep your search visibility.',
      },
      {
        q: 'Will I be able to add products myself?',
        a: 'Yes. We set the store up so you can manage products, prices and stock yourself, and we show you how.',
      },
    ],
  },
  {
    slug: 'seo',
    icon: 'search',
    title: 'SEO',
    summary: 'Get found by the right customers with technical and on-page optimization.',
    headline: 'Get found by customers who are already searching for you',
    intro: [
      'A website only helps your business if people can find it. Our SEO service improves how your site appears in search results, so the customers looking for what you offer land on your pages instead of a competitor’s.',
      'We focus on sustainable, best-practice work — fixing technical issues, improving content and structure, and reporting clearly on what has changed.',
    ],
    features: [
      {
        title: 'SEO audit',
        text: 'A full review of your site to uncover the issues holding back your visibility.',
      },
      {
        title: 'Keyword research',
        text: 'Find the terms your customers actually search for and the ones worth targeting.',
      },
      {
        title: 'On-page optimisation',
        text: 'Titles, headings, content and internal links tuned for both people and search engines.',
      },
      {
        title: 'Technical SEO',
        text: 'Site speed, mobile usability, indexing and structured data handled properly.',
      },
      {
        title: 'Local SEO',
        text: 'Help nearby customers find you through local search and map listings.',
      },
      {
        title: 'Reporting',
        text: 'Clear, regular updates on rankings, traffic and the work completed.',
      },
    ],
    benefits: [
      {
        icon: 'search',
        title: 'More visibility',
        text: 'Appear for the searches that matter most to your business.',
      },
      {
        icon: 'users',
        title: 'Better-quality traffic',
        text: 'Attract visitors who are actively looking for your services.',
      },
      {
        icon: 'chart',
        title: 'Long-term growth',
        text: 'Improvements that keep working for you, unlike ads that stop when the budget does.',
      },
    ],
    idealFor: [
      'Businesses that are hard to find on Google',
      'Websites with traffic but few enquiries',
      'Local businesses targeting nearby customers',
      'Companies launching or redesigning a site',
    ],
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'SEO is a long-term investment. Timing depends on your industry, competition and the current state of your site, so we set realistic expectations after the initial audit.',
      },
      {
        q: 'Can you guarantee a number one ranking?',
        a: 'No one can honestly guarantee specific rankings. What we do commit to is best-practice work, transparent reporting and steady improvement.',
      },
      {
        q: 'Do I need SEO if I already run ads?',
        a: 'They work well together. Ads bring immediate traffic, while SEO builds visibility that does not depend on ongoing ad spend.',
      },
      {
        q: 'Will you need access to my website?',
        a: 'Yes. To implement on-page and technical improvements we need access to your site, or we can work alongside your developer.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    icon: 'megaphone',
    title: 'Digital Marketing',
    summary: 'Campaigns across search and social that turn attention into leads.',
    headline: 'Marketing campaigns that turn attention into real leads',
    intro: [
      'Reaching the right audience takes a clear message in the right place. We plan and run digital marketing campaigns across search and social media that bring qualified visitors to your website and turn them into enquiries.',
      'Every campaign is built around your goals and measured against them, so you always know what your budget is achieving.',
    ],
    features: [
      {
        title: 'Social media marketing',
        text: 'Content and campaigns that build an audience on the platforms your customers use.',
      },
      {
        title: 'Paid advertising',
        text: 'Search and social ads targeted at the people most likely to buy.',
      },
      {
        title: 'Content strategy',
        text: 'A plan for what to publish, where, and why — aligned with your business goals.',
      },
      {
        title: 'Email marketing',
        text: 'Campaigns that keep your customers engaged and coming back.',
      },
      {
        title: 'Campaign landing pages',
        text: 'Dedicated pages that match your ads and make it easy to take action.',
      },
      {
        title: 'Analytics & reporting',
        text: 'Clear reports on reach, leads and return so you can see what is working.',
      },
    ],
    benefits: [
      {
        icon: 'users',
        title: 'Reach the right audience',
        text: 'Targeting that puts your message in front of likely customers.',
      },
      {
        icon: 'megaphone',
        title: 'A consistent brand voice',
        text: 'One clear message across every channel you appear on.',
      },
      {
        icon: 'chart',
        title: 'Decisions backed by data',
        text: 'Know which channels and campaigns deliver, and invest accordingly.',
      },
    ],
    idealFor: [
      'Businesses that want more leads quickly',
      'Brands building awareness in a new market',
      'Companies with an inactive social presence',
      'Teams without in-house marketing resources',
    ],
    faqs: [
      {
        q: 'Which channels should my business use?',
        a: 'It depends on where your customers spend their time. We recommend channels after looking at your audience, goals and budget.',
      },
      {
        q: 'How much should I spend on ads?',
        a: 'There is no single right number. We suggest a starting budget based on your goals, then adjust it as results come in.',
      },
      {
        q: 'How will I know if the campaigns are working?',
        a: 'You receive regular reports covering reach, clicks, leads and cost, explained in plain language.',
      },
      {
        q: 'Do you create the content as well?',
        a: 'Yes. We can plan and produce campaign content, or work with material your team provides.',
      },
    ],
  },
  {
    slug: 'branding',
    icon: 'brand',
    title: 'Branding',
    summary: 'Logos and identity systems that make your business recognizable.',
    headline: 'A brand identity that makes your business instantly recognisable',
    intro: [
      'Your brand is more than a logo — it is how customers recognise and remember you. We create distinctive visual identities that express who you are and stay consistent everywhere your business appears.',
      'From a new logo to complete brand guidelines, we give you the tools to look professional across your website, social media and printed materials.',
    ],
    features: [
      {
        title: 'Logo design',
        text: 'A distinctive, versatile logo that works at any size and on any background.',
      },
      {
        title: 'Visual identity',
        text: 'Colour palette, typography and graphic style that define your look.',
      },
      {
        title: 'Brand guidelines',
        text: 'A clear reference so your brand stays consistent wherever it is used.',
      },
      {
        title: 'Marketing collateral',
        text: 'Business cards, brochures and presentations designed to match.',
      },
      {
        title: 'Social media kit',
        text: 'Profile images, covers and post templates ready to use.',
      },
      {
        title: 'Brand refresh',
        text: 'Modernise an existing identity without losing what customers already recognise.',
      },
    ],
    benefits: [
      {
        icon: 'brand',
        title: 'Stand out from competitors',
        text: 'A distinctive identity helps customers pick you out and remember you.',
      },
      {
        icon: 'shield',
        title: 'Build credibility',
        text: 'A consistent, professional look signals that your business can be trusted.',
      },
      {
        icon: 'check',
        title: 'Consistency everywhere',
        text: 'Clear guidelines keep your brand looking right across every channel.',
      },
    ],
    idealFor: [
      'New businesses that need an identity',
      'Companies whose logo feels dated',
      'Brands that look inconsistent across channels',
      'Businesses preparing a relaunch or rebrand',
    ],
    faqs: [
      {
        q: 'How many logo concepts will I see?',
        a: 'We agree the number of initial concepts and revision rounds with you before the project starts, so you know exactly what to expect.',
      },
      {
        q: 'What files will I receive?',
        a: 'You receive your logo in the formats needed for web and print, along with the colour and font details used.',
      },
      {
        q: 'Can you refresh my existing logo instead of starting over?',
        a: 'Yes. A refresh keeps the recognisable parts of your identity while making it cleaner and more current.',
      },
      {
        q: 'Do I own the final design?',
        a: 'Yes. Once the project is complete, the final approved brand assets are yours to use.',
      },
    ],
  },
]

export const servicePath = (slug) => `/services/${slug}`
