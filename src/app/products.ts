export const products  = [
  {
    title: "Margherita Pizza",
    shortDescription: "Classic Neapolitan pizza with tomato sauce, mozzarella, and basil",
    longDescription: "The Margherita is a classic Neapolitan pizza named after Queen Margherita of Savoy. It features tomato sauce, fresh mozzarella cheese, and basil leaves. It's a simple yet delicious pizza that's perfect for any occasion.",
    picture: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    price: 10.99,
    availability: true
  },
  {
    title: "Tiramisu",
    shortDescription: "Layered dessert made with ladyfingers, espresso, mascarpone cheese, and cocoa powder",
    longDescription: "Tiramisu is a popular Italian dessert made with layers of ladyfingers soaked in espresso, creamy mascarpone cheese, and a dusting of cocoa powder. It's a rich and decadent dessert that's perfect for any sweet tooth.",
    picture: "https://images.unsplash.com/photo-1631206753348-db44968fd440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    price: 6.99,
    availability: true
  },
  {
    title: "Caprese Salad",
    shortDescription: "Fresh salad made with tomatoes, fresh mozzarella cheese, and basil",
    longDescription: "The Caprese salad is a fresh and simple Italian salad made with sliced tomatoes, fresh mozzarella cheese, and basil leaves. It's a perfect appetizer or side dish that highlights the freshness of the ingredients.",
    picture: "https://images.unsplash.com/photo-1595587870672-c79b47875c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80",
    price: 8.99,
    availability: true
  },
  {
    title: "Spaghetti Carbonara",
    shortDescription: "Pasta dish with bacon, eggs, and cheese",
    longDescription: "Spaghetti Carbonara is a classic Italian pasta dish made with spaghetti, eggs, cheese, and bacon. It's a creamy and flavorful dish that's perfect for a hearty dinner.",
    picture: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    price: 12.99,
    availability: false
  },
  {
    title: "Chicken Parmesan",
    shortDescription: "Breaded chicken topped with tomato sauceand melted mozzarella cheese, served with spaghetti",
    longDescription: "Chicken Parmesan is a popular Italian-American dish consisting of breaded chicken breast topped with tomato sauce and melted mozzarella cheese, served with spaghetti. It's a hearty and satisfying dish that's perfect for a family dinner or special occasion.",
    picture: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 14.99,
    availability: true
    },
    {
    title: "Pesto Pasta",
    shortDescription: "Pasta with homemade pesto sauce made with basil, garlic, pine nuts, and Parmesan cheese",
    longDescription: "Pesto Pasta is a delicious Italian dish made with pasta and homemade pesto sauce. The pesto sauce is made with fresh basil, garlic, pine nuts, and Parmesan cheese. It's a flavorful and satisfying dish that's perfect for any occasion.",
    picture: "https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 11.99,
    availability: true
    },
    {
    title: "Lasagna",
    shortDescription: "Layers of pasta, tomato sauce, meat, and cheese",
    longDescription: "Lasagna is a classic Italian dish made with layers of pasta, tomato sauce, meat, and cheese. It's a hearty and delicious dish that's perfect for a family dinner or special occasion.",
    picture: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 15.99,
    availability: true
    },
    {
    title: "Risotto",
    shortDescription: "Creamy rice dish cooked with white wine, Parmesan cheese, and mushrooms",
    longDescription: "Risotto is a creamy Italian rice dish cooked with white wine, Parmesan cheese, and mushrooms. It's a flavorful and satisfying dish that's perfect for a fancy dinner or a special occasion.",
    picture: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 13.99,
    availability: false
    }
    ];


      export interface IProducts {
        title: string;
        shortDescription: string;
        longDescription?: string;
        picture: string
        price: number
        availability?:boolean
    }
      
  