import React from 'react'
import { FaTachometerAlt, FaRegSun, FaChevronRight,FaWrench, FaStickyNote, 
    FaRegChartBar, FaCalendarAlt, FaChevronLeft,FaBolt } from "react-icons/fa";

const Sidebar = props => {
  return (
    <div className="bg-[#F5FF8C] h-screen px-[25px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#985F99]/[0.3]">
        <h1 className="text-[16px] leading-[24px] font-extrabold cursor-pointer">
          Admin Panel
        </h1>
      </div>

      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#985F99]/[0.8]">
        <FaTachometerAlt color="#985F99" />
        <p className="text-[14px] leading-[20px] font-bold text-slate-700 ">
          DashBoard
        </p>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#985F99]">
        <p className="flex text-[10px] font-extrabold leading-[16px] text-slate-700 ">
          INTERFACE
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="#985F99" />
            <p className="text-[14px] leading-[20px] font-normal text-slate-700">
              Pages
            </p>
          </div>
          <FaChevronRight color="#985F99" />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaRegChartBar color="#985F99" />
            <p className="text-[14px] leading-[20px] font-normal text-slate-700">
              Charts
            </p>
          </div>
          <FaChevronRight color="#985F99" />
        </div>
        <div className="flex items-center gap-[10px]">
          <FaCalendarAlt color="#985F99" />
          <p className="text-[14px] leading-[20px] font-normal text-slate-700">
            Tables
          </p>
        </div>
      </div>

      <div className="pt-[15px] border-b-[1px] border-[#985F99]">
        <p className="flex text-[10px] font-extrabold leading-[16px] text-slate-700 ">
          ADDONS
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaStickyNote color="#985F99" />
            <p className="text-[14px] leading-[20px] font-normal text-slate-700">
              Components
            </p>
          </div>
          <FaChevronRight color="#985F99" />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaWrench color="#985F99" />
            <p className="text-[14px] leading-[20px] font-normal text-slate-700">
              Utilities
            </p>
          </div>
          <FaChevronRight color="#985F99" />
        </div>

        <div className="flex items-center gap-[10px]">
          <FaCalendarAlt color="#985F99" />
          <p className="text-[14px] leading-[20px] font-normal text-slate-700">
            Tables
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center pt-[15px]">
          <div className="h-[40px] w-[40px] bg-[#AAACB0] rounded-full flex items-center justify-center cursor-pointer ">
            <FaChevronLeft color="#ffffff" />
          </div>
        </div>

        <div className="bg-[#AAACB0] ml-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px] mt-2">
            <FaBolt color="#ffffff"/>
            <p className='text-[12px] leading-[18px] font-normal text-white text-center '>Thi is gonna be an awesome project</p>
            <button className='bg-[#E6F29A] flex items-center justify-center h-[30px] w-full rounded-[3px] text-[12px] leading-[21px] font-normal'>Upgrade to Pro!</button>
        </div>
      </div>
    </div>
  );
}


export default Sidebar