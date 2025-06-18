


async function getDeviceData() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const battery = await navigator.getBattery();

    const data = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            pixelRatio: window.devicePixelRatio
        },
        touchSupport: isTouch,
        network: navigator.connection?.effectiveType || "unknown",
        battery: {
            level: battery.level,
            charging: battery.charging
        },
        cpuCores: navigator.hardwareConcurrency,
        memory: navigator.deviceMemory || "unknown"
    };

    console.log(data);
}

//getDeviceData();
