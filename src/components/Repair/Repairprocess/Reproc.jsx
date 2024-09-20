import React from 'react';
import ScheduleIcon from '@mui/icons-material/Schedule'; // Example import, adjust as needed
import BikerDeliveryIcon from '@mui/icons-material/LocalShipping'; // Example import, adjust as needed
import RealTimeUpdateIcon from '@mui/icons-material/Update'; // Example import, adjust as needed
import TwoHourRepairIcon from '@mui/icons-material/Timer'; // Example import, adjust as needed
import RepairedDeviceIcon from '@mui/icons-material/CheckCircle'; // Example import, adjust as needed
import PostRepairIcon from '@mui/icons-material/Support'; // Example import, adjust as needed

function One800Process() {
  return (
    <div className="p-6 bg-slate-600 flex flex-col items-center py-10">
        <div className='container  justify-start w-96 bg-white  rounded-xl'>
      <h2 className="text-2xl font-bold mb-4 text-center pt-4">One800 Process</h2>


      <div>
      <div className="space-y-5 pt-7 px-3">
    <div className="flex items-start pb-5 ">
        <ScheduleIcon className="text-blue-500 mr-2 " />
        <div>
            <h3 className="font-semibold">1. Schedule service at your convenience</h3>
            <p>Multiple scheduling options</p>
        </div>
    </div>
    <div className="flex items-start pb-5">
        <BikerDeliveryIcon className="text-blue-500 mr-2" />
        <div>
            <h3 className="font-semibold">2. Pickup by Porter within 30 mins</h3>
            <p>With live tracking</p>
        </div>
    </div>
    <div className="flex items-start pb-5 gap-2">
        <RealTimeUpdateIcon className="text-blue-500" />
        <div>
            <h3 className="font-semibold">3. Skilled & dedicated 100% support</h3>
            <p>With live tracking</p>
        </div>
    </div>
    <div className="flex items-start pb-5">
        <TwoHourRepairIcon className="text-blue-500 mr-2" />
        <div>
            <h3 className="font-semibold">4. Real-time updates with photos</h3>
            <p>Of Parts & Device</p>
        </div>
    </div>
    <div className="flex items-start pb-5">
        <RepairedDeviceIcon className="text-blue-500 mr-2" />
        <div>
            <h3 className="font-semibold">5. 2-hours service</h3>
            <p>Restored device delivered back at doorstep</p>
        </div>
    </div>
    <div className="flex items-start pb-5">
        <PostRepairIcon className="text-blue-500 mr-2" />
        <div>
            <h3 className="font-semibold ">6. Single-click post-service support</h3>
            <p>On the help-desk portal</p>
        </div>
    </div>
</div>


      </div>
      {/* <ul className="space-y-4 flex flex-col items-center pt-7">
        <li className="flex items-start pb-5">
          <ScheduleIcon className="text-blue-500 mr-2" />
          <div>
            <h3 className="font-semibold">1. Schedule service at your convenience</h3>
            <p>Multiple scheduling options</p>
          </div>
        </li>
        <li className="flex items-start pb-5">
          <BikerDeliveryIcon className="text-blue-500 mr-2" />
          <div>
            <h3 className="font-semibold">2. Pickup by Porter within 30 mins</h3>
            <p>With live tracking</p>
          </div>
        </li>
        <li className="flex items-start pb-5">
        <RealTimeUpdateIcon className="text-blue-500" /> 
          <div>
          <h3 className="font-semibold">3. Skilled & dedicated 100 support</h3>
          <p>With live tracking</p>
          </div>
        </li>
       
        <li className="flex items-start pb-5">
          <TwoHourRepairIcon className="text-blue-500 mr-2" />
          <div>
            <h3 className="font-semibold">4. Real-time updates with photos</h3>
            <p>Of Parts & Device</p>
          </div>
        </li>
        <li className="flex items-start pb-5">
          <RepairedDeviceIcon className="text-blue-500 mr-2" />
          <div>
            <h3 className="font-semibold">5. 2-hours service</h3>
            <p>Restored device delivered back at doorstep</p>
          </div>
        </li>
        <li className="flex items-start pb-5">
          <PostRepairIcon className="text-blue-500 mr-2" />
          <div>
            <h3 className="font-semibold pb-5">6. Single-click post-service support</h3>
            <p>On the help-desk portal</p>
          </div>
        </li>
      </ul> */}
      </div>
    </div>
  );
}

export default One800Process;
