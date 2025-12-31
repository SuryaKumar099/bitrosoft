import React from "react";
import {
  TbDeviceMobileCog,
  TbCloudComputing,
} from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMiscellaneousServices, MdIntegrationInstructions } from "react-icons/md";
import { IoIdCardOutline } from "react-icons/io5";
import { Card, CardDescription, CardTitle } from "./Ui/Card";
import Button from "./Ui/Button";
import { motion } from "framer-motion";

function OurService() {
  const cardDetails = [{ id: '1', icon: <TbDeviceMobileCog />, title: 'Mobile Development', description: 'Adam Infotech is a world leading smartphone phone application development.', button: 'Know More' }, { id: '2', icon: <FaLaptopCode />, title: 'Web Development', description: 'Building a website that has impact is a crucial step to distinguish the online communication of your message.', button: 'Know More' }, { id: '3', icon: <MdOutlineMiscellaneousServices />, title: 'Managed IT Services', description: 'The global market brings new challenges for every business nowadays. Ever increasing competition.', button: 'Know More' }, { id: '4', icon: <TbCloudComputing />, title: 'Cloud Computing', description: 'With the need for complex data processing increasing every day, Cloud computing has a vital part of computing.', button: 'Know More' }, { id: '5', icon: <MdIntegrationInstructions />, title: 'System Integration', description: 'Adam Infotech offers systems integration solutions and services for custom applications, service.', button: 'Know More' }, { id: '6', icon: <IoIdCardOutline />, title: 'Staff Augmentation', description: 'AIT is one of the best companies in the IT Staff Augmentation industry. Since 2007..', button: 'Know More' },]

  return (
      <div>
      <h2 className="text-center font-semibold text-3xl">
        <span className="text-blue-600">
        OUR {''}
        </span>
        SERVICE</h2>
     
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10 mt-10">
      {cardDetails.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{
            scale: 1.05,
            zIndex: 20,
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          <Card className="p-6 text-center shadow-md hover:shadow-2xl transition">

            {/* ICON */}
            <motion.div
              className="text-4xl text-blue-600 mb-4 flex justify-center"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <CardTitle className="mb-2">
              {item.title}
            </CardTitle>

            {/* DESCRIPTION */}
            <CardDescription>
              {item.description}
            </CardDescription>

            <Button className="mt-4">
              Know More
            </Button>

          </Card>
        </motion.div>
      ))}
      </div>
      </div>
  );
}

export default OurService;
