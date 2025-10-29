import { RxButton } from "react-icons/rx";
import { BiCreditCardFront } from "react-icons/bi";
import { IoIosAlert } from "react-icons/io";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdCheckbox } from "react-icons/io";
import { BiSolidToggleLeft } from "react-icons/bi";
import { IoRadioButtonOnSharp } from "react-icons/io5";



export const components = [
  {
    id: "button",
    name: "Button",
    category: "UI Elements",
    icon:<RxButton/>,
    code: `
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition">
  Click Me
</button>
    `,
  },
  {
    id: "card",
    name: "Card",
    category: "Layout",
     icon: <BiCreditCardFront/>,
    code: `
<div className="max-w-sm p-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div className="mb-2 text-2xl font-semibold text-gray-900">Card Title</div>
  <p className="mb-4 text-gray-600 text-sm leading-relaxed">
    This is a clean and minimal card design that looks great in dashboards or portfolios.
  </p>
  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
    Learn More
  </button>
</div>

    `,
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    icon: <IoIosAlert/>,
    code: `
<div className="flex items-center gap-3 p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50" role="alert">
  <svg className="shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.6c.75 1.333-.213 2.998-1.742 2.998H3.48c-1.53 0-2.492-1.665-1.742-2.998l6.519-11.6zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-.25-5.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" clipRule="evenodd" />
  </svg>
  <span className="text-sm font-medium">This is a warning alert — check it out!</span>
</div>
    `,
  },
  {
    id: "input",
    name: "Input Field",
    category: "Forms",
    icon: <BsFillFileTextFill/>,
    code: `
<div className="flex flex-col gap-2 w-64">
  <label className="text-sm font-medium text-gray-700">Email</label>
  <input
    type="email"
    placeholder="Enter your email"
    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</div>
    `,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Forms",
    icon: <IoMdCheckbox/>,
    code: `
<label className="flex items-center space-x-2 cursor-pointer">
  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
  <span className="text-gray-700 text-sm">Accept Terms & Conditions</span>
</label>
    `,
  },
  {
    id: "toggle",
    name: "Toggle Switch",
    category: "Forms",
    icon: <BiSolidToggleLeft/>,
    code: `
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="w-12 h-7 bg-gray-300 rounded-full peer-focus:ring-4 peer-focus:ring-indigo-300 transition-all peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-5 shadow-inner"></div>
</label>
    `,
  },
  {
    id: "radio",
    name: "Radio Buttons",
    category: "Forms",
    icon: <IoRadioButtonOnSharp/>,
    code: `
<div className="flex flex-col gap-2">
  <label className="inline-flex items-center">
    <input type="radio" name="options" className="text-indigo-600 focus:ring-indigo-500" />
    <span className="ml-2 text-gray-700 text-sm">Option 1</span>
  </label>
  <label className="inline-flex items-center">
    <input type="radio" name="options" className="text-indigo-600 focus:ring-indigo-500" />
    <span className="ml-2 text-gray-700 text-sm">Option 2</span>
  </label>
</div>
    `,
  },
];
