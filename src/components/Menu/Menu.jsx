import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/system";
import menuBg from "../../assets/Hero/herobg.png";

// Define keyframes for fade-in and slide-up animation (for header only)
const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Menu Item Component
const MenuItem = ({ name, price, description, isSmallScreen, isExtraSmall, index, isVisible }) => (
  <Box
    sx={{
      mb: { xs: 3, sm: 4, md: 6 },
      px: { xs: 1, sm: 0 },
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`, // Staggered delay
    }}
  >
    <Typography
      variant={isExtraSmall ? "subtitle1" : isSmallScreen ? "h6" : "h6"}
      fontWeight="bold"
      fontFamily="'Pacifico', cursive"
      sx={{
        mb: { xs: 0.5, sm: 1, md: 2 },
        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
      }}
    >
      {name} <span style={{ float: "right" }}>{price}</span>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        pr: { xs: "5px", sm: "10px", md: "120px" },
        fontSize: { xs: "0.875rem", sm: "1rem" },
      }}
    >
      {description}
    </Typography>
  </Box>
);

// Menu Section Component
const MenuSection = ({
  title,
  subtitle,
  items,
  isMobile,
  isSmallScreen,
  isExtraSmall,
  showDisclaimer = false,
  isVisible, // Control visibility
}) => (
  <Container
    maxWidth="lg"
    sx={{
      pb: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1, sm: 2, md: 4, lg: 6 },
    }}
  >
    <Typography
      variant={isExtraSmall ? "h6" : isSmallScreen ? "h5" : "h4"}
      fontWeight="bold"
      fontFamily="'Pacifico', cursive"
      sx={{
        mb: { xs: 0.5, sm: 1, md: 1 },
        color: "white",
        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out", // First item, no delay
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      fontFamily="'Pacifico', cursive"
      sx={{
        mb: { xs: 1, sm: 2, md: 4 },
        fontSize: { xs: "1rem", sm: "1.125rem" },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s", // Second item, slight delay
      }}
    >
      {subtitle}
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: { xs: 1, sm: 2, md: 4 },
        fontFamily: "'Pacifico', cursive",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
          <MenuItem
            key={index}
            {...item}
            isSmallScreen={isSmallScreen}
            isExtraSmall={isExtraSmall}
            index={index + 2} // Offset by 2 for title and subtitle
            isVisible={isVisible}
          />
        ))}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
          <MenuItem
            key={index}
            {...item}
            isSmallScreen={isSmallScreen}
            isExtraSmall={isExtraSmall}
            index={index + Math.ceil(items.length / 2) + 2} // Offset for second column
            isVisible={isVisible}
          />
        ))}
      </Box>
    </Box>
    {showDisclaimer && (
      <Typography
        variant="body2"
        textAlign="center"
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
          fontStyle: "italic",
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.5s ease-out ${items.length * 0.1 + 0.2}s, transform 0.5s ease-out ${
            items.length * 0.1 + 0.2
          }s`, // Delay after all items
        }}
      >
        All menu items are subject to availability and may vary. Please inform
        your server of any allergies or dietary restrictions. For custom orders,
        ask the chef for changes.
      </Typography>
    )}
    <Box
      sx={{
        borderBottom: "3px solid white",
        mt: { xs: 1, sm: 2, md: 2 },
      }}
    />
  </Container>
);

const Menu = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs")); // Below 600px
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Below 600px
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Below 900px

  // State to track visibility of each section
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleSections((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Menu data (unchanged content)
  const menuData = [
    {
      title: "Coffee",
      subtitle: "Freshly brewed Hot coffee",
      items: [
        {
          name: "Cappuccino",
          price: "$4.00",
          description:
            "A luxurious espresso-based drink made with equal parts espresso, steamed milk, and milk foam. Cappuccinos are known for their creamy texture and delicate balance of flavors.",
        },
        {
          name: "Espresso",
          price: "$2.50",
          description:
            "A bold and intense shot of coffee brewed by forcing hot water through finely-ground coffee beans. Served in a small cup, espresso is rich and concentrated, with a layer of crema on top.",
        },
        {
          name: "Mochaccino",
          price: "$5.00",
          description:
            "A decadent espresso-based drink made with a shot of espresso, steamed milk, and rich chocolate syrup, topped with whipped cream. Mochas are perfect for those with a sweet tooth.",
        },
        {
          name: "Americano Latte",
          price: "$3.00",
          description:
            "A classic coffee drink made by diluting a shot of espresso with hot water, resulting in a smooth and flavorful cup with a similar strength to drip coffee.",
        },
        {
          name: "Affogato",
          price: "$6.00",
          description:
            "A delightful dessert coffee with hot espresso poured over vanilla ice cream.",
        },
        {
          name: "Latte",
          price: "$4.50",
          description:
            "A smooth and velvety espresso-based drink made with steamed milk and a thin layer of foam.",
        },
      ],
    },
    {
      title: "Coffee Cold",
      subtitle: "Chilled Coffee",
      items: [
        {
          name: "Iced Coffee",
          price: "$3.50",
          description:
            "A refreshing and energizing coffee beverage made by pouring chilled brewed coffee over ice. Iced coffee is crisp, smooth, and perfect for hot days or a refreshing pick-me-up.",
        },
        {
          name: "Cold Brew",
          price: "$4.00",
          description:
            "A smooth and rich coffee concentrate brewed with cold water over an extended period, resulting in a low-acid and highly caffeinated beverage. Cold brew is served over ice and can be enjoyed black or with milk and sweetener.",
        },
        {
          name: "Iced Latte",
          price: "$4.50",
          description:
            "A creamy and indulgent coffee beverage made with a shot of espresso, cold milk, and ice, creating a refreshing and satisfying drink with a hint of sweetness.",
        },
        {
          name: "Frappe",
          price: "$5.00",
          description:
            "A blended coffee beverage made with espresso, milk, ice, and sweetener, resulting in a creamy and frothy drink with a slushy-like consistency. Frappes are customizable with flavored syrups and toppings.",
        },
        {
          name: "Vietnamese Iced Coffee",
          price: "$5.50",
          description:
            "A sweet and bold coffee drink made with strong brewed coffee and sweetened condensed milk, poured over ice. Vietnamese iced coffee is rich, creamy, and perfect for those who enjoy a hint of sweetness in their coffee.",
        },
        {
          name: "Iced Mocha",
          price: "$5.50",
          description:
            "A decadent coffee beverage made with a shot of espresso, cold milk, chocolate syrup, and ice, topped with whipped cream. Iced mochas are rich, indulgent, and perfect for chocolate lovers.",
        },
        {
          name: "Nitro Cold Brew",
          price: "$5.50",
          description:
            "A velvety-smooth and effervescent coffee beverage made with cold brew coffee infused with nitrogen gas, resulting in a creamy texture and cascading bubbles. Nitro cold brew is served on tap and has a rich and creamy mouthfeel.",
        },
        {
          name: "Iced Caramel Macchiato",
          price: "$5.50",
          description:
            "A sweet and creamy coffee beverage made with chilled milk, espresso, vanilla syrup, and caramel sauce, served over ice. Iced caramel macchiatos are luxurious and indulgent, with layers of rich flavors.",
        },
      ],
    },
    {
      title: "Drinks",
      subtitle: "Drinks other than coffee",
      items: [
        {
          name: "Iced Tea (Sweetened/Unsweetened)",
          price: "$3.00",
          description:
            "A refreshing and thirst-quenching beverage made by brewing tea leaves and then chilling the tea over ice. Iced tea is available in a variety of flavors, including black tea, green tea, and herbal tea.",
        },
        {
          name: "Lemonade",
          price: "$3.50",
          description:
            "A classic and tangy beverage made with freshly squeezed lemon juice, water, and sweetener, served over ice. Lemonade is refreshing and perfect for hot summer days.",
        },
        {
          name: "Iced Matcha Latte",
          price: "$5.50",
          description:
            "A creamy and indulgent beverage made with high-quality matcha powder, cold milk, and sweetener, served over ice. Iced matcha lattes are smooth, earthy, and rich in antioxidants.",
        },
        {
          name: "Fruit Smoothies (Assorted flavors)",
          price: "$5.00",
          description:
            "A refreshing and nutritious blended beverage made with a combination of fresh fruit, yogurt or milk, and ice. Fruit smoothies are available in a variety of flavors, including strawberry, banana, mango, and mixed berry.",
        },
        {
          name: "Italian Soda",
          price: "$4.00",
          description:
            "A fizzy and flavorful beverage made with carbonated water and flavored syrup, served over ice and garnished with fresh fruit or a slice of citrus. Italian sodas are available in a variety of flavors, including raspberry, peach, and cherry.",
        },
        {
          name: "Sparkling Water",
          price: "$2.50",
          description:
            "A crisp and effervescent beverage made with carbonated water, perfect for quenching your thirst and refreshing your palate. Sparkling water is available plain or flavored with a hint of citrus or fruit.",
        },
        {
          name: "Fruit Infused Water",
          price: "$3.00",
          description:
            "A refreshing and hydrating beverage made by infusing water with slices of fresh fruit, herbs, or cucumbers. Fruit infused water is a healthy and delicious way to stay hydrated and add a burst of flavor to your day.",
        },
        {
          name: "Iced Chai Latte",
          price: "$5.50",
          description:
            "A creamy and aromatic beverage made with spiced chai tea concentrate, cold milk, and sweetener, served over ice. Iced chai lattes are flavorful and comforting, with notes of cinnamon, cardamom, and ginger.",
        },
      ],
    },
    {
      title: "Bites Menu",
      subtitle: "Small Bites & Appetizers",
      items: [
        {
          name: "Garlic Parmesan Fries",
          price: "$6.99",
          description:
            "Crispy golden fries tossed in garlic-infused olive oil and sprinkled with grated Parmesan cheese and chopped parsley.",
        },
        {
          name: "Loaded Nachos",
          price: "$9.99",
          description:
            "Crispy tortilla chips piled high with melted cheese, black beans, diced tomatoes, jalapeños, sour cream, and guacamole.",
        },
        {
          name: "Bruschetta",
          price: "$8.99",
          description:
            "Toasted baguette slices topped with diced tomatoes, garlic, basil, and balsamic glaze, a fresh and flavorful appetizer.",
        },
        {
          name: "Mini Sliders",
          price: "$11.99",
          description:
            "Juicy beef or chicken sliders served on mini buns with lettuce, tomato, and your choice of cheese, perfect for sharing or enjoying as a snack.",
        },
        {
          name: "Caprese Skewers",
          price: "$8.99",
          description:
            "Fresh mozzarella cheese, cherry tomatoes, and basil leaves skewered on toothpicks and drizzled with balsamic glaze, a simple and elegant appetizer.",
        },
        {
          name: "Mozzarella Sticks",
          price: "$7.99",
          description:
            "Golden-fried mozzarella cheese sticks served with marinara sauce for dipping, crispy on the outside and gooey on the inside.",
        },
        {
          name: "Chicken Wings",
          price: "$10.99",
          description:
            "Crispy chicken wings tossed in your choice of buffalo, barbecue, or honey garlic sauce, served with celery sticks and blue cheese or ranch dressing.",
        },
        {
          name: "Spinach and Artichoke Dip",
          price: "$9.99",
          description:
            "Creamy spinach and artichoke dip served warm with tortilla chips or toasted bread for dipping, a comforting and crowd-pleasing favorite.",
        },
        {
          name: "Vegetable Spring Rolls",
          price: "$9.99",
          description:
            "Crispy fried spring rolls filled with mixed vegetables and served with sweet chili sauce for dipping, a crunchy and satisfying appetizer.",
        },
        {
          name: "Hummus Platter",
          price: "$10.99",
          description:
            "Creamy hummus served with warm pita bread, cucumber slices, cherry tomatoes, and Kalamata olives, a healthy and satisfying snack.",
        },
      ],
    },
    {
      title: "Wraps",
      subtitle: "Freshly Made Wraps",
      items: [
        {
          name: "Classic Chicken Caesar Wrap",
          price: "$9.99",
          description:
            "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a soft tortilla.",
        },
        {
          name: "Turkey & Avocado Wrap",
          price: "$10.99",
          description:
            "Sliced turkey breast, avocado, bacon, lettuce, tomato, and mayo wrapped in a whole wheat tortilla.",
        },
        {
          name: "Veggie Delight Wrap",
          price: "$8.99",
          description:
            "Fresh vegetables, hummus, and mixed greens wrapped in a spinach tortilla.",
        },
        {
          name: "BBQ Ranch Chicken Wrap",
          price: "$9.99",
          description:
            "Tender chicken strips, crispy bacon, cheddar cheese, lettuce, tomato, and BBQ ranch dressing wrapped in a flour tortilla.",
        },
        {
          name: "Mediterranean Falafel Wrap",
          price: "$8.99",
          description:
            "Crispy falafel, tabbouleh, hummus, cucumber, tomato, and tzatziki sauce wrapped in a warm pita bread.",
        },
        {
          name: "Buffalo Chicken Wrap",
          price: "$9.99",
          description:
            "Spicy buffalo chicken, lettuce, tomato, shredded cheese, and ranch dressing wrapped in a jalapeño cheddar tortilla.",
        },
        {
          name: "Greek Gyro Wrap",
          price: "$10.99",
          description:
            "Thinly sliced gyro meat, lettuce, tomato, red onion, feta cheese, and tzatziki sauce wrapped in a warm pita bread.",
        },
        {
          name: "California Turkey Club Wrap",
          price: "$10.99",
          description:
            "Turkey breast, bacon, avocado, lettuce, tomato, and mayo wrapped in a spinach tortilla.",
        },
        {
          name: "Caprese Wrap",
          price: "$9.99",
          description:
            "Fresh mozzarella, tomatoes, basil leaves, balsamic glaze, and pesto wrapped in a sun-dried tomato tortilla.",
        },
        {
          name: "Philly Cheesesteak Wrap",
          price: "$11.99",
          description:
            "Sliced steak, sautéed onions, peppers, mushrooms, provolone cheese, and mayo wrapped in a garlic herb tortilla.",
        },
      ],
    },
    {
      title: "Subs",
      subtitle: "Toasted Sub Sandwiches",
      items: [
        {
          name: "Italian Sub",
          price: "$9.99",
          description:
            "Ham, salami, pepperoni, provolone cheese, lettuce, tomato, onion, and Italian dressing on a toasted hoagie roll.",
        },
        {
          name: "Veggie Sub",
          price: "$8.99",
          description:
            "Grilled zucchini, bell peppers, onions, mushrooms, spinach, provolone cheese, and pesto mayo on a toasted sub roll.",
        },
        {
          name: "Roast Beef & Cheddar Sub",
          price: "$10.99",
          description:
            "Thinly sliced roast beef paired with sharp cheddar cheese, crisp lettuce, tangy tomato, and horseradish mayo on a toasted sub roll.",
        },
        {
          name: "Turkey Club Sub",
          price: "$10.99",
          description:
            "Sliced turkey breast, bacon, Swiss cheese, lettuce, tomato, and mayo on a toasted sub roll.",
        },
        {
          name: "Ham and Swiss Sub",
          price: "$9.99",
          description:
            "Tender slices of ham, Swiss cheese, crunchy lettuce, juicy tomato, and creamy mayo, all nestled in a toasted sub roll.",
        },
        {
          name: "Chicken Bacon Ranch Sub",
          price: "$11.99",
          description:
            "Grilled chicken breast, crispy bacon, melted cheddar cheese, fresh lettuce, tomato, and creamy ranch dressing, all wrapped in a warm sub roll.",
        },
        {
          name: "Chicken Caesar Sub",
          price: "$10.99",
          description:
            "Grilled chicken breast, crisp romaine lettuce, Parmesan cheese, and Caesar dressing served in a toasted sub roll.",
        },
        {
          name: "Meatball Marinara Sub",
          price: "$9.99",
          description:
            "Homemade meatballs smothered in marinara sauce, topped with melted mozzarella cheese, served in a warm sub roll.",
        },
        {
          name: "Philly Cheesesteak Sub",
          price: "$11.99",
          description:
            "Thinly sliced steak sautéed with onions, peppers, and melted provolone cheese, served in a toasted sub roll.",
        },
        {
          name: "Buffalo Chicken Sub",
          price: "$11.99",
          description:
            "Crispy chicken tossed in spicy buffalo sauce, topped with lettuce, tomato, and ranch dressing, served in a toasted sub roll.",
        },
      ],
    },
    {
      title: "Burgers",
      subtitle: "Gourmet Burgers",
      items: [
        {
          name: "Classic Beef Burger",
          price: "$8.99",
          description:
            "A juicy beef patty topped with crisp lettuce, ripe tomato, onion, pickles, and tangy mayo on a sesame seed bun.",
        },
        {
          name: "Bacon Avocado Burger",
          price: "$10.99",
          description:
            "Crispy bacon, creamy avocado, lettuce, tomato, and mayo on a sesame seed bun, served with a juicy beef patty.",
        },
        {
          name: "Mushroom Swiss Burger",
          price: "$10.99",
          description:
            "Sautéed mushrooms and melted Swiss cheese atop a juicy beef patty, finished with lettuce, tomato, and mayo on a Kaiser roll.",
        },
        {
          name: "BBQ Chicken Burger",
          price: "$11.99",
          description:
            "Grilled chicken breast smothered in tangy BBQ sauce and topped with melted cheddar cheese, crispy bacon, and onion straws on a sesame seed bun.",
        },
        {
          name: "California Turkey Burger",
          price: "$9.99",
          description:
            "Lean ground turkey patty topped with fresh avocado, crisp lettuce, ripe tomato, and zesty chipotle mayo on a whole wheat bun.",
        },
        {
          name: "Jalapeño Pepper Jack Burger",
          price: "$10.99",
          description:
            "Spicy jalapeño slices and melted pepper jack cheese atop a juicy beef patty, finished with lettuce, tomato, and chipotle mayo on a sesame seed bun.",
        },
        {
          name: "Veggie Burger (Vegetarian)",
          price: "$9.99",
          description:
            "A flavorful veggie patty made with black beans, quinoa, and spices, topped with lettuce, tomato, onion, and creamy avocado on a whole wheat bun.",
        },
        {
          name: "Blue Cheese Bacon Burger",
          price: "$11.99",
          description:
            "Crumbled blue cheese and crispy bacon atop a juicy beef patty, finished with lettuce, tomato, and tangy mayo on a Kaiser roll.",
        },
      ],
    },
    {
      title: "Cold Burgers",
      subtitle: "Chilled Burger Options",
      items: [
        {
          name: "Classic Beef Burger",
          price: "$8.99",
          description:
            "A juicy beef patty topped with crisp lettuce, ripe tomato, onion, pickles, and tangy mayo on a sesame seed bun.",
        },
        {
          name: "Vegetarian Black Bean Burger",
          price: "8.99",
          description:
            "Our house-made black bean patty topped with fresh avocado, lettuce, tomato, and chipotle mayo on a whole wheat bun.",
        },
        {
          name: "Turkey Burger",
          price: "$9.99",
          description:
            "Lean ground turkey seasoned to perfection and topped with your choice of fixings on a whole wheat bun.",
        },
        {
          name: "Bacon Avocado Burger",
          price: "$10.99",
          description:
            "Crispy bacon, creamy avocado, lettuce, tomato, and mayo on a sesame seed bun, served with a juicy beef patty.",
        },
        {
          name: "Mushroom Swiss Burger",
          price: "$10.99",
          description:
            "Sautéed mushrooms and melted Swiss cheese atop a juicy beef patty, finished with lettuce, tomato, and mayo on a Kaiser roll.",
        },
        {
          name: "BBQ Chicken Burger",
          price: "$11.99",
          description:
            "Grilled chicken breast smothered in tangy BBQ sauce and topped with melted cheddar cheese, crispy bacon, and onion straws on a sesame seed bun.",
        },
      ],
    },
    {
      title: "Hot Dogs",
      subtitle: "Delicious Hot Dog Options",
      items: [
        {
          name: "Classic Hot Dog",
          price: "$4.99",
          description:
            "A juicy beef or pork hot dog served in a soft bun, topped with ketchup, mustard, and diced onions.",
        },
        {
          name: "Chili Cheese Dog",
          price: "$5.99",
          description:
            "A classic hot dog topped with hearty chili and melted cheddar cheese, served in a soft bun.",
        },
        {
          name: "Chicago Style Hot Dog",
          price: "$6.99",
          description:
            "A beef or pork hot dog served in a poppy seed bun, topped with yellow mustard, chopped onions, sweet pickle relish, tomato slices, pickled sport peppers, and a dash of celery salt.",
        },
        {
          name: "BBQ Bacon Ranch Dog",
          price: "$6.99",
          description:
            "A savory hot dog topped with crispy bacon, tangy BBQ sauce, and creamy ranch dressing, served in a soft bun.",
        },
      ],
    },
    {
      title: "Cakes and Pastries",
      subtitle: "Delicious Cakes and Pastries",
      items: [
        {
          name: "Chocolate Cake",
          price: "$5.99 per slice",
          description:
            "A rich and decadent chocolate cake layered with velvety chocolate frosting, perfect for satisfying your sweet tooth.",
        },
        {
          name: "Carrot Cake",
          price: "$5.99 per slice",
          description:
            "A moist and flavorful carrot cake studded with walnuts and topped with cream cheese frosting, a classic dessert favorite.",
        },
        {
          name: "Red Velvet Cake",
          price: "$6.99 per slice",
          description:
            "A luxurious red velvet cake with a hint of cocoa, layered with smooth cream cheese frosting and adorned with red velvet cake crumbs.",
        },
        {
          name: "Cheesecake",
          price: "$6.99 per slice",
          description:
            "Creamy and indulgent cheesecake topped with your choice of fresh fruit compote or rich chocolate ganache.",
        },
        {
          name: "Danishes",
          price: "$3.49 each",
          description:
            "Buttery and flaky pastries filled with sweet fruit preserves or rich almond paste, perfect for pairing with a cup of coffee.",
        },
        {
          name: "Fruit Tart",
          price: "$4.99 per slice",
          description:
            "A buttery tart shell filled with creamy pastry cream and topped with an assortment of fresh seasonal fruits, glazed to perfection.",
        },
        {
          name: "Croissants",
          price: "$3.49 each",
          description:
            "Buttery and flaky pastries filled with sweet fruit preserves or rich almond paste, perfect for pairing with a cup of coffee.",
        },
        {
          name: "Cinnamon Rolls",
          price: "$4.49 each",
          description:
            "Soft and fluffy cinnamon rolls swirled with cinnamon sugar and topped with creamy icing, a comforting and indulgent treat.",
        },
      ],
    },
    {
      title: "Ice Creams",
      subtitle: "Delicious Ice Cream Flavors",
      items: [
        {
          name: "Vanilla Bean",
          price: "$3.99 per scoop cone or cup",
          description:
            "Classic and creamy, our vanilla bean ice cream is made with real Madagascar vanilla for a rich and indulgent flavor experience.",
        },
        {
          name: "Chocolate Fudge",
          price: "$5 per scoop cone or cup",
          description:
            "Dive into decadence with our velvety chocolate fudge ice cream. Each spoonful is packed with intense chocolate flavor and ribbons of smooth fudge swirls.",
        },
        {
          name: "Mint Chocolate Chip",
          price: "$6.99 per scoop cone or cup",
          description:
            "Refreshingly cool and irresistibly creamy, our mint chocolate chip ice cream features vibrant mint flavor infused with generous chunks of rich chocolate.",
        },
        {
          name: "Rocky Road",
          price: "$6.99 per scoop cone or cup",
          description:
            "Embark on a flavor adventure with our rocky road ice cream. Packed with marshmallows, roasted almonds, and chocolate chunks, this indulgent treat offers a satisfying combination of sweetness and crunch.",
        },
        {
          name: "Butter Pecan",
          price: "$5 per scoop cone or cup",
          description:
            "Experience the nutty goodness of our butter pecan ice cream. Made with buttery caramel and toasted pecan pieces, this flavor is a comforting and irresistible treat.",
        },
        {
          name: "Coconut Bliss",
          price: "$3.99 per scoop cone or cup",
          description:
            "Transport yourself to the tropics with our coconut bliss ice cream. Creamy coconut milk and shredded coconut combine to create a luscious and exotic treat that's perfect for coconut lovers.",
        },
        {
          name: "Coffee Toffee Crunch",
          price: "$5 per scoop cone or cup",
          description:
            "Wake up your senses with our coffee toffee crunch ice cream. Rich coffee ice cream is studded with crunchy toffee pieces for a delightful pick-me-up with every scoop.",
        },
        {
          name: "Strawberry Swirl",
          price: "$3.99 per scoop cone or cup",
          description:
            "Indulge in the sweetness of summer with our strawberry swirl ice cream. Made with ripe strawberries, this refreshing treat features swirls of strawberry puree for a burst of fruity flavor in every bite.",
        },
        {
          name: "Cookies and Cream",
          price: "$3.99 per scoop cone or cup",
          description:
            "A timeless favorite, our cookies and cream ice cream combines crunchy chocolate cookie pieces with creamy vanilla ice cream for a delightful blend of textures and flavors.",
        },
      ],
    },
    {
      title: "Packed Food",
      subtitle: "Delicious Ready-to-Eat Meals",
      items: [
        {
          name: "Chicken Curry",
          price: "$12.99",
          description:
            "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with fragrant basmati rice. A classic Indian dish packed with flavor.",
        },
        {
          name: "Butter Chicken",
          price: "$14.99",
          description:
            "Juicy pieces of chicken cooked in a creamy tomato-based sauce, infused with butter, cream, and a blend of aromatic spices. Served with basmati rice for a comforting and satisfying meal.",
        },
        {
          name: "Chicken Korma",
          price: "$13.99",
          description:
            "Succulent chicken cooked in a creamy cashew and almond sauce, flavored with aromatic spices and served with fluffy basmati rice. A delightful indulgence for the senses.",
        },
        {
          name: "Paneer Tikka Masala",
          price: "$13.99",
          description:
            "Cubes of paneer cheese simmered in a creamy tomato-based sauce with bell peppers and onions, infused with traditional Indian spices. Served with basmati rice.",
        },
      ],
      showDisclaimer: true,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: { xs: 0, md: "320px" },
        width: { xs: "100%", md: "calc(100% - 320px)" },
      }}
    >
      {/* Header Section with Initial Animation */}
      <Box
        sx={{
          height: { xs: "15vh", sm: "20vh", md: "25vh", lg: "30vh" },
          backgroundImage: `url(${menuBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          animation: `${fadeInSlideUp} 1s ease-out forwards`,
          opacity: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <Typography
          variant={isExtraSmall ? "h5" : isSmallScreen ? "h4" : "h3"}
          fontWeight="bold"
          sx={{
            position: "relative",
            fontFamily: "'Pacifico', cursive",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Beverages
        </Typography>
      </Box>

      {/* Menu Content */}
      <Box
        sx={{
          backgroundColor: "#2c2a26",
          color: "white",
          py: { xs: 2, sm: 4, md: 6 },
          px: { xs: 1, sm: 2, md: 4, lg: 1 },
        }}
      >
        {menuData.map((section, index) => (
          <div
            ref={(el) => (sectionRefs.current[index] = el)}
            key={index}
          >
            <MenuSection
              {...section}
              isMobile={isMobile}
              isSmallScreen={isSmallScreen}
              isExtraSmall={isExtraSmall}
              isVisible={visibleSections[index]}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;