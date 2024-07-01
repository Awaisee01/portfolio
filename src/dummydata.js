import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import img1 from "../src/pages/images/IMG-20240630-WA0005.jpg";
import img2 from "../src/pages/images/IMG-20240630-WA0006.jpg";
import img3 from "../src/pages/images/IMG-20240630-WA0007.jpg";
import b1 from "./images/blog/b1.png";
import b2 from "./images/blog/b2.png";
import b3 from "./images/blog/b3.png";

export const home = [
  {
    text: "HELLO I'M",
    name: "MALIK AWAIS",
    post: "WEB DESIGNER",
    design: "FRONT END DEVELOPER",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1:
      "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];
export const portfolio = [
  {
    id: 1,
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: img2,
    name: "MALIK AWAIS",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: img1,

    name: "MALIK AWAIS",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: img3,

    name: "MALIK AWAIS",
    post: "React Developer",
  },
];
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: b1,
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: b2,
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: b3,
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Model town B Bahawalpur",
    text2: "Bahawalpur, Punjab, 63100",
  },
  {
    icon: <PhoneIphone />,
    text1: "00923188368138",
    text2: "00923098419744",
  },
  {
    icon: <EmailOutlined />,
    text1: "awaisasif096@gmail.com",
    text2: "malikcwais336@gmail.com",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
