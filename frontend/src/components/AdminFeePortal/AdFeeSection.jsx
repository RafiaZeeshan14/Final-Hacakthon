import React, { useEffect, useState } from "react";
import AdminFeelayout from "../Layouts/AdminFeeLayout";
import AdminDropdowns from "./AdminDropdowns";
import AdminTable from "./AdminTable";

const AdFeeSection = () => {
  return (
    <AdminFeelayout>
      <div className="flex flex-col p-2 ">
        <AdminDropdowns />
        <AdminTable />
      </div>
    </AdminFeelayout>
  );
};

export default AdFeeSection;
