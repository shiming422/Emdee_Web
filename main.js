const businessPrimary = {
  title: "嵌入式整机交付（单片机业务）",
  description:
    "将原有单片机项目沉淀为公司级交付业务，覆盖传感采集、执行控制、PCB 与整机联调，输出可复制的交付模板。",
  tags: [
    "汽车灯光控制",
    "智能粮仓",
    "智能鞋柜",
    "心率血氧检测",
    "智能快递柜",
    "智能停车场",
    "风力监测",
    "K210 LoRa",
    "多传感器灌溉",
  ],
};

const businessExtensions = [
  {
    title: "算法设计与控制策略",
    description: "构建稳定的控制策略、滤波与决策算法，强化嵌入式系统的可靠性与节能能力。",
    tags: ["控制策略", "融合算法", "功耗优化"],
  },
  {
    title: "YOLO 视觉识别方案",
    description: "提供工业检测与场景识别完整流程，从数据标注到模型部署加速。",
    tags: ["目标检测", "训练调参", "边缘推理"],
  },
  {
    title: "App 与云端协同",
    description: "为硬件系统提供移动端控制、告警推送与数据可视化体验。",
    tags: ["App 控制", "告警联动", "数据看板"],
  },
  {
    title: "工业物联网平台",
    description: "构建设备接入、远程运维与资产管理平台，支撑多场景规模化部署。",
    tags: ["设备接入", "远程运维", "权限体系"],
  },
  {
    title: "硬件产品定制与量产",
    description: "从样机打样到量产交付，提供可靠供应链与质量验证体系。",
    tags: ["打样", "量产", "供应链"],
  },
  {
    title: "数据可视化与运营",
    description: "构建设备状态大屏与运营指标展示，让业务决策更直观。",
    tags: ["大屏", "运营指标", "数据分析"],
  },
];

const founders = [
  {
    name: "创始人 / 负责人",
    role: "嵌入式系统 · 交付负责人",
    summary:
      "覆盖嵌入式硬件、软件与边缘视觉的系统级开发，具备从设计、联调到部署验证的完整交付能力。",
    avatar: "./assets/avatar.png",
    tags: ["嵌入式硬件", "嵌入式软件", "边缘计算", "物联网"],
    skills: [
      {
        title: "嵌入式硬件设计与调试能力",
        detail:
          "具备嵌入式硬件系统设计与调试经验，能够独立完成原理图设计、PCB Layout 及板级调试工作；熟悉常见电源管理、电平匹配及接口电路设计，具备插件与贴片焊接经验，可处理 SMD、QFP、SOP 等常见封装器件，能够搭建并验证满足嵌入式软件开发与系统联调需求的硬件平台。熟练使用嘉立创 EDA、Altium Designer 等 PCB 设计工具完成完整硬件开发流程。",
      },
      {
        title: "嵌入式软件开发与系统开发能力",
        detail:
          "基于 CubeMX + Keil MDK、CCS、MRS、Vivado 等开发环境开展 MCU / FPGA 开发，熟悉 STM32 多系列、ESP32 及 51 单片机的外设配置、底层驱动适配与应用开发；掌握 Python、MATLAB、Qt 上位机开发，能够实现上位机与嵌入式设备之间的多协议通信及系统级联调。熟悉 RTOS（FreeRTOS、RT-Thread）的任务调度、线程间通信与同步机制；具备基于 Raspberry Pi、Allwinner、Rockchip 等平台的嵌入式 Linux 系统移植、设备树配置及外设驱动适配经验，能够完成系统部署与基础功能验证。",
      },
      {
        title: "通信协议与物联网系统集成能力",
        detail:
          "掌握 TCP/IP、UART、SPI、I²C 等常用通信协议的原理与调试方法，熟悉 4G、5G、WiFi、蓝牙、LoRa、ZigBee 等物联网通信技术，具备将多种通信模块稳定集成至嵌入式系统并完成系统级联调的工程实践能力。",
      },
      {
        title: "计算机视觉与边缘计算应用能力",
        detail:
          "熟悉典型目标检测算法框架（如 YOLOv5、YOLOv8、YOLOv11），具备从数据准备、模型训练到部署验证的完整实践经验；能够将视觉算法部署至 NVIDIA Jetson、Raspberry Pi 等边缘计算平台，并熟悉 OpenMV、K210、K230 等嵌入式视觉设备在实际项目中的应用与调试。",
      },
    ],
    highlights: [
      "2025“博创杯”嵌入式人工智能设计大赛 国特",
      "2024 全球人工智能算法精英赛 国一",
      "2025 中国高校计算机大赛-嵌入式设计赛 国三",
      "2025 Robocom 机器人开发大赛 国二",
      "《物联网技术》期刊第一作者论文一篇（已刊登）",
      "软件著作权一份（登记号 2025SR2321947）",
      "2025 年大学生创业训练计划省级项目",
    ],
  },
  {
    name: "创始人席位 02",
    role: "待加入",
    summary: "预留创始人简历信息，后续补充。",
    tags: ["待补充"],
    highlights: ["待补充个人履历与研究方向"],
    placeholder: true,
  },
  {
    name: "创始人席位 03",
    role: "待加入",
    summary: "预留创始人简历信息，后续补充。",
    tags: ["待补充"],
    highlights: ["待补充个人履历与研究方向"],
    placeholder: true,
  },
];

const projectLibrary = [
  {
    id: "car-lighting",
    title: "汽车灯光智能控制系统",
    status: "已完成",
    image: "./assets/car-lighting.png",
    summary: "车灯智能控制与安全逻辑闭环，满足复杂场景下的稳定响应。",
    tags: ["灯光控制", "控制逻辑", "PCB"],
    logicImages: ["./assets/car-lighting.png", "./assets/parking.png"],
    code: `// 车灯控制状态机\nvoid loop() {\n  read_sensors();\n  if (lux < 20 && speed > 5) {\n    headlamp_on();\n  } else if (lux > 50) {\n    headlamp_off();\n  }\n  sync_can_bus();\n}`,
    steps: ["需求拆解与场景建模", "输入采集与安全校验", "车灯策略联调与路测验证"],
  },
  {
    id: "grain-silo",
    title: "C51 智能粮仓",
    status: "已完成",
    image: "./assets/grain-silo.png",
    summary: "多传感器监测粮仓环境，异常告警与自动联动控制。",
    tags: ["环境监测", "C51", "告警"],
    logicImages: ["./assets/grain-silo.png", "./assets/wind.png"],
    code: `// 环境监测采样\nvoid sample() {\n  temp = read_temp();\n  humi = read_humi();\n  if (temp > 32 || humi > 70) {\n    trigger_alarm();\n    fan_on();\n  }\n}`,
    steps: ["传感器选型与采样策略", "告警阈值设定", "自动通风联动"],
  },
  {
    id: "shoe-cabinet",
    title: "51 智能鞋柜系统",
    status: "已完成",
    image: "./assets/shoe-cabinet.png",
    summary: "鞋柜通风与除湿控制，提升使用舒适性与安全性。",
    tags: ["通风控制", "传感器", "执行机构"],
    logicImages: ["./assets/shoe-cabinet.png", "./assets/irrigation.png"],
    code: `// 通风策略\nif (humidity > 60) {\n  fan_on();\n  dehumidify_on();\n} else {\n  fan_off();\n}`,
    steps: ["湿度采集与阈值策略", "执行机构控制", "整机测试验证"],
  },
  {
    id: "spo2",
    title: "心率血氧检测系统",
    status: "已完成",
    image: "./assets/spo2.png",
    summary: "体征采集与显示一体化设计，强调数据稳定性与可读性。",
    tags: ["体征采集", "数据处理", "显示"],
    logicImages: ["./assets/spo2.png", "./assets/car-lighting.png"],
    code: `// 体征数据处理\nraw = read_ppg();\nfiltered = bandpass(raw);\nspo2 = calc_spo2(filtered);\nshow(spo2);`,
    steps: ["信号采样与滤波", "算法计算与校准", "显示与交互设计"],
  },
  {
    id: "smart-locker",
    title: "智能快递柜",
    status: "已完成",
    image: "./assets/smart-locker.png",
    summary: "多舱门控制与状态回传，保障柜体稳定与安全。",
    tags: ["柜体控制", "通信", "状态回传"],
    logicImages: ["./assets/smart-locker.png", "./assets/k210-lora.jpg"],
    code: `// 柜门控制流程\nif (auth_ok()) {\n  open_door(slot_id);\n  send_status(slot_id, OPENED);\n}`,
    steps: ["权限验证与门控逻辑", "状态回传与日志", "异常处理与容错"],
  },
  {
    id: "parking",
    title: "智能停车场",
    status: "进行中",
    image: "./assets/parking.png",
    summary: "车辆检测与引导策略结合，优化停车效率。",
    tags: ["车辆检测", "引导策略", "STM32"],
    logicImages: ["./assets/parking.png", "./assets/wind.png"],
    code: `// 车辆检测与引导\nif (sensor_triggered()) {\n  update_slot_state();\n  display_guidance();\n}`,
    steps: ["检测模块配置", "引导策略建模", "现场联调"],
  },
  {
    id: "wind-monitor",
    title: "风力发电监测系统",
    status: "已完成",
    image: "./assets/wind.png",
    summary: "风电运行状态采集与监测展示，确保远端运行稳定。",
    tags: ["风电监测", "数据采集", "STM32"],
    logicImages: ["./assets/wind.png", "./assets/grain-silo.png"],
    code: `// 风电监测采集\nrpm = read_rpm();\nvoltage = read_voltage();\nif (rpm < limit) {\n  send_alert();\n}\nreport_metrics();`,
    steps: ["采集通道配置", "阈值告警策略", "远程上报与可视化"],
  },
  {
    id: "k210-lora",
    title: "K210 LoRa 项目",
    status: "进行中",
    image: "./assets/k210-lora.jpg",
    summary: "边缘计算与低功耗通信结合，强化远距离链路稳定性。",
    tags: ["K210", "LoRa", "边缘计算"],
    logicImages: ["./assets/k210-lora.jpg", "./assets/car-lighting.png"],
    code: `// LoRa 通信链路\nif (packet_ready()) {\n  send_packet();\n  wait_ack();\n}\nupdate_link_quality();`,
    steps: ["链路参数调优", "边缘侧任务编排", "稳定性压力测试"],
  },
  {
    id: "irrigation",
    title: "多传感器协同灌溉",
    status: "进行中",
    image: "./assets/irrigation.png",
    summary: "多源采集协同灌溉策略，提升水资源利用效率。",
    tags: ["多传感器", "灌溉控制", "C51"],
    logicImages: ["./assets/irrigation.png", "./assets/shoe-cabinet.png"],
    code: `// 灌溉联动策略\nif (soil_moisture < threshold) {\n  open_valve();\n  log_action();\n}\n`,
    steps: ["传感器部署与标定", "灌溉策略联动", "现场连续运行测试"],
  },
];

const businessPrimaryEl = document.getElementById("businessPrimary");
const businessGridEl = document.getElementById("businessGrid");
const founderGridEl = document.getElementById("founderGrid");
const projectGridEl = document.getElementById("projectGrid");

const renderBusiness = () => {
  if (businessPrimaryEl) {
    businessPrimaryEl.innerHTML = `
      <h3>${businessPrimary.title}</h3>
      <p>${businessPrimary.description}</p>
      <div class="business-tags">
        ${businessPrimary.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
  }

  if (businessGridEl) {
    businessGridEl.innerHTML = businessExtensions
      .map(
        (item) => `
        <article class="business-card">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <div class="business-tags">
            ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
      )
      .join("");
  }
};

const renderFounders = () => {
  if (!founderGridEl) return;
  founderGridEl.innerHTML = founders
    .map((founder) => {
      const placeholderClass = founder.placeholder ? "placeholder" : "";
      const avatarHtml = founder.avatar
        ? `<div class="founder-avatar"><img src="${founder.avatar}" alt="${founder.name} 头像" loading="lazy" /></div>`
        : "";
      const skillsHtml =
        founder.skills && founder.skills.length
          ? `
            <div class="founder-section">
              <div class="founder-section-title">个人技能</div>
              <div class="founder-skill-list">
                ${founder.skills
                  .map(
                    (skill) => `
                  <div class="founder-skill">
                    <div class="founder-skill-title">${skill.title}</div>
                    <div class="founder-skill-desc">${skill.detail}</div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
          : "";
      return `
        <article class="founder-card ${placeholderClass}">
          <div class="founder-top">
            ${avatarHtml}
            <div class="founder-meta">
              <div class="founder-role">${founder.role}</div>
              <div class="founder-name">${founder.name}</div>
              <div class="founder-summary">${founder.summary}</div>
            </div>
          </div>
          <div class="founder-tags">
            ${founder.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          ${skillsHtml}
          <div class="founder-highlights">
            ${founder.highlights.map((item) => `<div class="founder-highlight">${item}</div>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");
};

const renderProjects = () => {
  if (!projectGridEl) return;
  projectGridEl.innerHTML = projectLibrary
    .map((project) => {
      const statusClass = project.status === "已完成" ? "status-done" : "status-doing";
      return `
        <article class="project-card" data-id="${project.id}">
          <div class="project-media">
            <img src="${project.image}" alt="${project.title}" loading="lazy" data-zoomable="true" />
          </div>
          <div class="project-title">${project.title}</div>
          <p class="project-desc">${project.summary}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="project-actions">
            <span class="project-status ${statusClass}">${project.status}</span>
            <button class="project-action-btn" type="button" data-action="detail">查看详情</button>
          </div>
        </article>
      `;
    })
    .join("");
};

renderBusiness();
renderFounders();
renderProjects();

const detailPanel = document.getElementById("detailPanel");
const detailTitle = document.getElementById("detailTitle");
const detailSummary = document.getElementById("detailSummary");
const detailStatus = document.getElementById("detailStatus");
const detailTags = document.getElementById("detailTags");
const detailGallery = document.getElementById("detailGallery");
const detailCode = document.getElementById("detailCode");
const detailSteps = document.getElementById("detailSteps");
const detailClose = detailPanel ? detailPanel.querySelector(".detail-close") : null;

const isDetailOpen = () => detailPanel && detailPanel.classList.contains("is-visible");
const isImageOpen = () => imageModal && imageModal.classList.contains("is-visible");
const updateScrollLock = () => {
  if (isDetailOpen() || isImageOpen()) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

const openDetail = (project) => {
  if (!detailPanel || !project) return;
  if (detailTitle) detailTitle.textContent = project.title;
  if (detailSummary) detailSummary.textContent = project.summary;
  if (detailStatus) detailStatus.textContent = project.status;
  if (detailTags) {
    detailTags.innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  }
  if (detailGallery) {
    detailGallery.innerHTML = project.logicImages
      .map(
        (src, index) =>
          `<img src="${src}" alt="${project.title} 逻辑图 ${index + 1}" data-zoomable="true" />`
      )
      .join("");
  }
  if (detailCode) {
    detailCode.textContent = project.code;
  }
  if (detailSteps) {
    detailSteps.innerHTML = project.steps
      .map((step) => `<div class="detail-step">${step}</div>`)
      .join("");
  }
  detailPanel.classList.add("is-visible");
  detailPanel.setAttribute("aria-hidden", "false");
  updateScrollLock();
};

const closeDetail = () => {
  if (!detailPanel) return;
  detailPanel.classList.remove("is-visible");
  detailPanel.setAttribute("aria-hidden", "true");
  updateScrollLock();
};

if (projectGridEl) {
  projectGridEl.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const detailButton = target.closest("[data-action='detail']");
    if (!detailButton) return;
    const card = detailButton.closest(".project-card");
    if (!card) return;
    const project = projectLibrary.find((item) => item.id === card.dataset.id);
    if (project) {
      openDetail(project);
    }
  });
}

if (detailPanel) {
  detailPanel.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.hasAttribute("data-close")) {
      closeDetail();
    }
  });
}

if (detailClose) {
  detailClose.addEventListener("click", closeDetail);
}

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
  updateScrollLock();
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
  updateScrollLock();
};

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const zoomTarget = target.closest("[data-zoomable='true']");
  if (zoomTarget && zoomTarget instanceof HTMLImageElement) {
    openImageModal(zoomTarget.src, zoomTarget.alt);
  }
});

if (imageModal) {
  imageModal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.hasAttribute("data-close")) {
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
    return;
  }
  if (detailPanel && detailPanel.classList.contains("is-visible")) {
    closeDetail();
  }
});
