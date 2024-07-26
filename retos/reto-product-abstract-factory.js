// Productos: CPU, Memory, Display
class CPU {
    setSeries(series) {
        console.log(`Setting CPU series to ${series}`);
    }
}

class Memory {
    setCapacityInGB(capacity) {
        console.log(`Setting Memory capacity to ${capacity}GB`);
    }
}

class Display {
    setResolution(resolution) {
        console.log(`Setting Display resolution to ${resolution}`);
    }
}

// Fábricas abstractas
class AbstractFactory {
    createCPU() {
        throw new Error('This method should be overridden!');
    }

    createMemory() {
        throw new Error('This method should be overridden!');
    }

    createDisplay() {
        throw new Error('This method should be overridden!');
    }
}

// Fábricas concretas para cada familia de productos
class PhoneFactory extends AbstractFactory {
    createCPU() {
        const cpu = new CPU();
        cpu.setSeries('Phone Series');
        return cpu;
    }

    createMemory() {
        const memory = new Memory();
        memory.setCapacityInGB(4);
        return memory;
    }

    createDisplay() {
        const display = new Display();
        display.setResolution('1080p');
        return display;
    }
}

class LaptopFactory extends AbstractFactory {
    createCPU() {
        const cpu = new CPU();
        cpu.setSeries('Laptop Series');
        return cpu;
    }

    createMemory() {
        const memory = new Memory();
        memory.setCapacityInGB(16);
        return memory;
    }

    createDisplay() {
        const display = new Display();
        display.setResolution('4K');
        return display;
    }
}

class TabletFactory extends AbstractFactory {
    createCPU() {
        const cpu = new CPU();
        cpu.setSeries('Tablet Series');
        return cpu;
    }

    createMemory() {
        const memory = new Memory();
        memory.setCapacityInGB(8);
        return memory;
    }

    createDisplay() {
        const display = new Display();
        display.setResolution('1440p');
        return display;
    }
}

// Cliente que utiliza las fábricas abstractas
class Device {
    constructor(factory) {
        this.cpu = factory.createCPU();
        this.memory = factory.createMemory();
        this.display = factory.createDisplay();
    }

    describe() {
        console.log('Device configuration:');
        this.cpu.setSeries(this.cpu.series);
        this.memory.setCapacityInGB(this.memory.capacity);
        this.display.setResolution(this.display.resolution);
    }
}

// Ejemplo de uso
const phoneFactory = new PhoneFactory();
const laptopFactory = new LaptopFactory();
const tabletFactory = new TabletFactory();

const phone = new Device(phoneFactory);
const laptop = new Device(laptopFactory);
const tablet = new Device(tabletFactory);

phone.describe();
laptop.describe();
tablet.describe();