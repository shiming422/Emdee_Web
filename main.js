const projectGroups = {
  mcu: {
    label: "单片机项目",
    description: "精选展示近期完成及推进中的单片机设计，突出系统性与落地能力。",
    items: [
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
    ],
  },
  algorithm: {
    label: "算法设计",
    description: "围绕控制策略、信号处理与优化决策的算法方案，强调稳定性与可落地性。",
    items: [
      {
        title: "多传感器融合滤波",
        status: "已完成",
        placeholder: "ALGO",
        tone: "#ffd9c9",
        description: "针对多源采集噪声设计融合算法，提高数据稳定性与可用性。",
        tags: ["卡尔曼滤波", "融合策略", "稳定性"],
      },
      {
        title: "路径规划与避障策略",
        status: "进行中",
        placeholder: "PATH",
        tone: "#ffe6b5",
        description: "以实时性为目标构建规划模型，提升复杂环境下的可执行度。",
        tags: ["A* 搜索", "避障", "实时性"],
      },
      {
        title: "功耗自适应控制",
        status: "已完成",
        placeholder: "CTRL",
        tone: "#ffd3e0",
        description: "根据负载与环境动态调整采样与执行频率，降低系统能耗。",
        tags: ["控制策略", "功耗优化", "闭环"],
      },
    ],
  },
  yolo: {
    label: "YOLO 识别设计",
    description: "目标检测模型训练与部署实践，覆盖数据标注、训练调参与推理优化。",
    items: [
      {
        title: "YOLOv8 工业缺陷检测",
        status: "已完成",
        placeholder: "YOLO",
        tone: "#d4e4ff",
        description: "构建工业缺陷数据集并完成模型训练，提升现场识别准确率。",
        tags: ["YOLOv8", "缺陷检测", "数据标注"],
      },
      {
        title: "边缘端模型量化部署",
        status: "进行中",
        placeholder: "EDGE",
        tone: "#d1f0ff",
        description: "通过量化与剪枝提升推理速度，确保端侧稳定运行。",
        tags: ["INT8", "推理加速", "NPU"],
      },
      {
        title: "多场景识别效果优化",
        status: "已完成",
        placeholder: "TUNE",
        tone: "#cfe1ff",
        description: "针对不同光照与背景场景优化模型泛化表现。",
        tags: ["mAP 提升", "增广", "迁移学习"],
      },
    ],
  },
  app: {
    label: "App 设计",
    description: "为硬件系统提供 App 端管理、控制与数据可视化体验。",
    items: [
      {
        title: "设备状态可视化 App",
        status: "已完成",
        placeholder: "APP",
        tone: "#d7f2e1",
        description: "构建设备数据看板与实时趋势展示，提升运维效率。",
        tags: ["数据看板", "蓝牙", "实时同步"],
      },
      {
        title: "远程告警与工单联动",
        status: "进行中",
        placeholder: "ALRM",
        tone: "#c9f2ea",
        description: "打通设备告警与工单流程，实现异常快速闭环处理。",
        tags: ["推送", "告警", "云同步"],
      },
      {
        title: "多设备管理与权限体系",
        status: "已完成",
        placeholder: "MGR",
        tone: "#cfeee0",
        description: "支持多设备分组、权限分级与操作日志可追溯。",
        tags: ["用户权限", "设备分组", "日志"],
      },
    ],
  },
};

const grid = document.getElementById("project-grid");
const projectDesc = document.getElementById("project-desc");
const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");
const doingCount = document.getElementById("doingCount");
const tabButtons = document.querySelectorAll(".tab-btn");
let activeCategory = "mcu";
let switchTimer = null;

const updateCounts = (items) => {
  if (!totalCount || !doneCount || !doingCount) return;
  const total = items.length;
  const done = items.filter((item) => item.status === "已完成").length;
  const doing = items.filter((item) => item.status === "进行中").length;

  totalCount.textContent = String(total);
  doneCount.textContent = String(done);
  doingCount.textContent = String(doing);
};

const buildProjectCard = (project, index) => {
  const statusClass = project.status === "已完成" ? "status-done" : "status-doing";
  const media = project.image
    ? `<img src="${project.image}" alt="${project.title}" loading="lazy" />`
    : `<div class="project-placeholder" style="--tone: ${project.tone || "rgba(255, 107, 61, 0.25)"}">
        <span>${project.placeholder || "LAB"}</span>
      </div>`;

  return `
    <article class="project-card" style="--delay: ${index * 0.08}s">
      <div class="project-image">
        ${media}
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
};

const setActiveTab = (category) => {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
};

const renderCategory = (category, options = {}) => {
  const group = projectGroups[category];
  if (!group) return;

  const render = () => {
    if (grid) {
      grid.innerHTML = group.items.map((project, index) => buildProjectCard(project, index)).join("");
    }
    if (projectDesc) {
      projectDesc.textContent = group.description;
    }
    updateCounts(group.items);
  };

  if (options.skipTransition || !grid) {
    render();
    return;
  }

  grid.classList.add("is-switching");
  window.clearTimeout(switchTimer);
  switchTimer = window.setTimeout(() => {
    render();
    grid.classList.remove("is-switching");
  }, 160);
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    if (!category || category === activeCategory) return;
    activeCategory = category;
    setActiveTab(category);
    renderCategory(category);
  });
});

setActiveTab(activeCategory);
renderCategory(activeCategory, { skipTransition: true });

const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageModalCaption = document.getElementById("imageModalCaption");
const imageModalClose = imageModal ? imageModal.querySelector(".image-modal__close") : null;

const openImageModal = (src, alt) => {
  if (!imageModal || !imageModalImg) return;
  imageModalImg.src = src;
  imageModalImg.alt = alt || "";
  if (imageModalCaption) {
    imageModalCaption.textContent = alt || "";
  }
  imageModal.classList.add("is-visible");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeImageModal = () => {
  if (!imageModal || !imageModalImg) return;
  imageModal.classList.remove("is-visible");
  imageModal.setAttribute("aria-hidden", "true");
  imageModalImg.src = "";
  imageModalImg.alt = "";
  if (imageModalCaption) {
    imageModalCaption.textContent = "";
  }
  document.body.classList.remove("no-scroll");
};

if (grid) {
  grid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const image = target.closest(".project-image img");
    if (!image || !(image instanceof HTMLImageElement)) return;
    openImageModal(image.src, image.alt);
  });
}

if (imageModal) {
  imageModal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.hasAttribute("data-close") || target === imageModal) {
      closeImageModal();
    }
  });
}

if (imageModalClose) {
  imageModalClose.addEventListener("click", closeImageModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (imageModal && imageModal.classList.contains("is-visible")) {
    closeImageModal();
  }
});
