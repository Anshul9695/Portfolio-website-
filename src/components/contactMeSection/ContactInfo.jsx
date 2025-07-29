import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="anshul.info2021@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 6386437668" Image={FiPhone} />
      <SingleInfo text="Chitrakoot, Utter Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
