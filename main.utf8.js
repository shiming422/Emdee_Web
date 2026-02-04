const projects = [
  {
    title: "汽车灯光智能控制系统",
    status: "已完成",
    image: "./assets/car-lighting.png",
    description: "围绕车辆灯光的自动化控制，强调输入采集、逻辑判断与稳定输出。",
    tags: ["灯光控制", "PCB 设计", "系统联调"],
  },
  {
    title: "C51 智能粮仓",
    status: "已完成",
    image: "./assets/grain-silo.png",
    description: "面向粮仓环境监测与状态提示的单片机方案，关注可靠采集与控制闭环。",
    tags: ["环境监测", "C51", "工程验证"],
  },
  {
    title: "51 智能鞋柜系统",
    status: "已完成",
    image: "./assets/shoe-cabinet.png",
    description: "围绕鞋柜内部通风与状态管理设计控制逻辑，提升使用体验与安全性。",
    tags: ["通风控制", "传感器", "PCB"],
  },
  {
    title: "心率血氧检测系统",
    status: "已完成",
    image: "./assets/spo2.png",
    description: "聚焦体征采集与显示的硬件系统整合，强调数据稳定性与展示清晰度。",
    tags: ["体征采集", "32 位 MCU", "显示"],
  },
  {
    title: "智能快递柜",
    status: "已完成",
    image: "./assets/smart-locker.png",
    description: "多舱门控制与状态反馈的系统设计，突出稳定通信与执行控制。",
    tags: ["柜体控制", "系统集成", "32 位 MCU"],
  },
  {
    title: "智能停车场",
    status: "已完成",
    image: "./assets/parking.png",
    description: "面向车辆检测与引导控制的嵌入式方案，兼顾流程效率与可靠性。",
    tags: ["车辆检测", "STM32", "控制策略"],
  },
  {
    title: "风力发电监测系统",
    status: "已完成",
    image: "./assets/wind.png",
    description: "风电运行状态采集与监测展示的单片机方案，强调数据稳定与工程落地。",
    tags: ["风电监测", "STM32", "数据采集"],
  },
  {
    title: "K210 LoRa 项目",
    status: "进行中",
    image: "./assets/k210-lora.jpg",
    description: "结合边缘计算与低功耗通信的系统探索，持续优化稳定性与链路表现。",
    tags: ["K210", "LoRa", "通信"],
  },
  {
    title: "多传感器协同灌溉",
    status: "进行中",
    image: "./assets/irrigation.png",
    description: "多传感器协同驱动灌溉策略，强化采集融合与执行联动。",
    tags: ["C51", "灌溉控制", "多传感器"],
  },
];

const grid = document.getElementById("project-grid");

if (grid) {
  grid.innerHTML = projects
    .map((project, index) => {
      const statusClass = project.status === "已完成" ? "status-done" : "status-doing";
      return `
        <article class="project-card" style="--delay: ${index * 0.08}s">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy" />
          </div>
          <div class="project-head">
            <div class="project-title">${project.title}</div>
            <span class="project-status ${statusClass}">${project.status}</span>
          </div>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");
const doingCount = document.getElementById("doingCount");

if (totalCount && doneCount && doingCount) {
  const total = projects.length;
  const done = projects.filter((item) => item.status === "已完成").length;
  const doing = projects.filter((item) => item.status === "进行中").length;

  totalCount.textContent = String(total);
  doneCount.textContent = String(done);
  doingCount.textContent = String(doing);
}

