"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import * as THREE from "three";

// ------------------------------------------------------------------
// TYPES
// ------------------------------------------------------------------
export interface MarketplaceItem {
  name: string;
  price: string;
  link: string;
  demo: React.FC;
  code: string;
}

// ------------------------------------------------------------------
// 5 HPC/ENTERPRISE TEMPLATES (Light‑Mode, Pro‑Level)
// ------------------------------------------------------------------

/** 2) HPC Job Scheduling – List with dynamic status updates. */
const HPCJobScheduling: React.FC = () => {
  const [jobs, setJobs] = useState([
    { id: 1, name: "FluidSim", status: "running" },
    { id: 2, name: "ProteinFold", status: "queued" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobs((prev) =>
        prev.map((job) =>
          job.status === "running" && Math.random() < 0.3
            ? { ...job, status: "complete" }
            : job
        )
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-50 p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">HPC Job Scheduling</h1>
      <div className="space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-3 rounded shadow flex justify-between">
            <span className="font-semibold">{job.name}</span>
            <span
              className={
                job.status === "running"
                  ? "text-blue-500"
                  : job.status === "complete"
                  ? "text-green-600"
                  : "text-yellow-600"
              }
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HPCJobSchedulingCode = `
const HPCJobScheduling = () => {
  const [jobs, setJobs] = React.useState([
    { id:1, name:"FluidSim", status:"running" },
    { id:2, name:"ProteinFold", status:"queued" },
  ]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setJobs(prev => prev.map(job =>
        job.status==="running" && Math.random()<0.3
          ? { ...job, status:"complete" }
          : job
      ));
    },2500);
    return () => clearInterval(interval);
  },[]);
  return (
    <div className="w-full h-screen bg-gray-50 p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">HPC Job Scheduling</h1>
      <div className="space-y-3">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-3 rounded shadow flex justify-between">
            <span className="font-semibold">{job.name}</span>
            <span className={
              job.status==="running" ? "text-blue-500" :
              job.status==="complete" ? "text-green-600" : "text-yellow-600"
            }>
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
`;

/** 3) HPC Resource Usage – Live-updating line chart for CPU and GPU usage. */
const HPCResourceUsage: React.FC = () => {
  const [data, setData] = useState([
    { time: 0, cpu: 50, gpu: 30 },
    { time: 1, cpu: 55, gpu: 32 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev,
        {
          time: prev[prev.length - 1].time + 1,
          cpu: Math.min(100, Math.max(0, prev[prev.length - 1].cpu + (Math.random() * 10 - 5))),
          gpu: Math.min(100, Math.max(0, prev[prev.length - 1].gpu + (Math.random() * 10 - 5))),
        },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-white p-8 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-4">HPC Resource Usage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="time" stroke="#333" />
          <YAxis stroke="#333" domain={[0, 100]} />
          <Tooltip contentStyle={{ backgroundColor: "#f9fafb", border: "none" }} />
          <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={3} />
          <Line type="monotone" dataKey="gpu" stroke="#F59E0B" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const HPCResourceUsageCode = `
const HPCResourceUsage = () => {
  const [data, setData] = React.useState([
    { time:0, cpu:50, gpu:30 },
    { time:1, cpu:55, gpu:32 },
  ]);
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      setData(prev => [
        ...prev,
        {
          time: prev[prev.length-1].time+1,
          cpu: Math.min(100, Math.max(0, prev[prev.length-1].cpu+(Math.random()*10-5))),
          gpu: Math.min(100, Math.max(0, prev[prev.length-1].gpu+(Math.random()*10-5)))
        }
      ]);
    },2000);
    return ()=>clearInterval(interval);
  },[]);
  return (
    <div className="w-full h-screen bg-white p-8 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-4">HPC Resource Usage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee"/>
          <XAxis dataKey="time" stroke="#333"/>
          <YAxis stroke="#333" domain={[0,100]}/>
          <Tooltip contentStyle={{ backgroundColor:"#f9fafb", border:"none" }}/>
          <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={3}/>
          <Line type="monotone" dataKey="gpu" stroke="#F59E0B" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
`;

/** 4) Enterprise Finance Dashboard – live line chart simulating revenue. */
const EnterpriseFinanceDashboard: React.FC = () => {
  const [data, setData] = useState([
    { day: "Mon", revenue: 12000 },
    { day: "Tue", revenue: 14000 },
    { day: "Wed", revenue: 13000 },
    { day: "Thu", revenue: 16000 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((d) => ({ ...d, revenue: d.revenue + Math.round(Math.random() * 200 - 100) }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center">Enterprise Finance</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="day" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip contentStyle={{ backgroundColor: "#f9fafb", border: "none" }} />
          <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const EnterpriseFinanceDashboardCode = `
const EnterpriseFinanceDashboard = () => {
  const [data, setData] = React.useState([
    { day:"Mon", revenue:12000 },
    { day:"Tue", revenue:14000 },
    { day:"Wed", revenue:13000 },
    { day:"Thu", revenue:16000 },
  ]);
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      setData(prev => prev.map(d=>({ ...d, revenue: d.revenue+Math.round(Math.random()*200-100) })));
    },2000);
    return ()=>clearInterval(interval);
  },[]);
  return (
    <div className="w-full h-screen bg-gray-100 p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center">Enterprise Finance</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee"/>
          <XAxis dataKey="day" stroke="#333"/>
          <YAxis stroke="#333"/>
          <Tooltip contentStyle={{ backgroundColor:"#f9fafb", border:"none" }}/>
          <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
`;

/** 5) Supply Chain Manager – live shipments chart. */
const SupplyChainManager: React.FC = () => {
  const [data, setData] = useState([
    { name: "Warehouse A", shipments: 80 },
    { name: "Warehouse B", shipments: 60 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          shipments: Math.max(0, item.shipments + Math.round(Math.random() * 10 - 5)),
        }))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-white p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center">Supply Chain Manager</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip contentStyle={{ backgroundColor: "#f9fafb", border: "none" }} />
          <Line type="monotone" dataKey="shipments" stroke="#EF4444" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const SupplyChainManagerCode = `
const SupplyChainManager = () => {
  const [data, setData] = React.useState([
    { name:"Warehouse A", shipments:80 },
    { name:"Warehouse B", shipments:60 }
  ]);
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      setData(prev => prev.map(item=>({
        ...item,
        shipments: Math.max(0, item.shipments + Math.round(Math.random()*10-5))
      })));
    },1500);
    return ()=>clearInterval(interval);
  },[]);
  return (
    <div className="w-full h-screen bg-white p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center">Supply Chain Manager</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee"/>
          <XAxis dataKey="name" stroke="#333"/>
          <YAxis stroke="#333"/>
          <Tooltip contentStyle={{ backgroundColor:"#f9fafb", border:"none" }}/>
          <Line type="monotone" dataKey="shipments" stroke="#EF4444" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
`;

// ------------------------------------------------------------------
// 5 HPC/ENTERPRISE COMPONENTS (Light‑Mode, Pro‑Level)
// ------------------------------------------------------------------

/** 2) HPC Job Queue – new jobs appear with motion. */
const HPCJobQueue: React.FC = () => {
  const [jobs, setJobs] = useState([{ id: 1, name: "Analysis", status: "queued" }]);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobs((prev) => [
        ...prev,
        { id: prev.length + 1, name: `Job #${prev.length + 1}`, status: "queued" },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-50 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">HPC Job Queue</h2>
      <div className="max-h-40 overflow-y-auto space-y-2">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-2 rounded shadow flex justify-between"
          >
            <span>{job.name}</span>
            <span className="text-yellow-600">{job.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/** 3) HPC Resource Chart – live-updating resource usage line chart. */
const HPCResourceChart: React.FC = () => {
  const [data, setData] = useState([
    { resource: "CPU", usage: 60 },
    { resource: "GPU", usage: 40 },
    { resource: "RAM", usage: 70 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((r) => ({
          ...r,
          usage: Math.min(100, Math.max(0, r.usage + Math.round(Math.random() * 10 - 5))),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white p-4">
      <h2 className="text-xl font-bold mb-2">HPC Resource Chart</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="resource" stroke="#333" />
          <YAxis stroke="#333" domain={[0, 100]} />
          <Tooltip contentStyle={{ backgroundColor: "#f9fafb", border: "none" }} />
          <Line type="monotone" dataKey="usage" stroke="#3B82F6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

/** 4) HPC Cluster Topology – 3D ring layout of nodes. */

/** 5) HPC Env Manager – form to add environment variables. */
const HPCEnvManager: React.FC = () => {
  const [vars, setVars] = useState([
    { name: "PATH", value: "/usr/bin:/bin" },
    { name: "OMP_NUM_THREADS", value: "8" },
  ]);
  const [newVar, setNewVar] = useState({ name: "", value: "" });

  const addVar = () => {
    if (newVar.name.trim()) {
      setVars((prev) => [...prev, newVar]);
      setNewVar({ name: "", value: "" });
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">HPC Env Manager</h2>
      <div className="space-y-2">
        {vars.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between bg-white p-2 rounded shadow"
          >
            <span className="font-semibold">{v.name}</span>
            <span className="text-gray-600">{v.value}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex mt-4 space-x-2">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="VAR_NAME"
          value={newVar.name}
          onChange={(e) => setNewVar((prev) => ({ ...prev, name: e.target.value }))}
        />
        <input
          className="border p-2 flex-1 rounded"
          placeholder="value"
          value={newVar.value}
          onChange={(e) => setNewVar((prev) => ({ ...prev, value: e.target.value }))}
        />
        <button onClick={addVar} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// EXPORT: TEMPLATES & COMPONENTS (with literal code strings)
// ------------------------------------------------------------------

export const templates: MarketplaceItem[] = [
  {
    name: "HPC Job Scheduling",
    price: "$549.99",
    link: "/templates/hpc-job-scheduling",
    demo: HPCJobScheduling,
    code: HPCJobSchedulingCode,
  },
  {
    name: "HPC Resource Usage",
    price: "$579.99",
    link: "/templates/hpc-resource-usage",
    demo: HPCResourceUsage,
    code: HPCResourceUsageCode,
  },
  {
    name: "Enterprise Finance Dashboard",
    price: "$499.99",
    link: "/templates/enterprise-finance",
    demo: EnterpriseFinanceDashboard,
    code: EnterpriseFinanceDashboardCode,
  },
  {
    name: "Supply Chain Manager",
    price: "$429.99",
    link: "/templates/supply-chain",
    demo: SupplyChainManager,
    code: SupplyChainManagerCode,
  },
];

export const components: MarketplaceItem[] = [
  {
    name: "HPC Job Queue",
    price: "$89.99",
    link: "/components/hpc-job-queue",
    demo: HPCJobQueue,
    code: HPCJobQueue.toString(),
  },
  {
    name: "HPC Resource Chart",
    price: "$69.99",
    link: "/components/hpc-resource-chart",
    demo: HPCResourceChart,
    code: HPCResourceChart.toString(),
  },
  {
    name: "HPC Env Manager",
    price: "$79.99",
    link: "/components/hpc-env-manager",
    demo: HPCEnvManager,
    code: HPCEnvManager.toString(),
  },
];
