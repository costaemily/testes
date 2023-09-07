const formatLableType = require("./index");

// 'test' e 'it' são a mesma coisa em jest, ou seja, servem para criar o teste
test("Hide currency values format", () => {
    expect(formatLableType(20, "currency", true)).toBe("R$ ******");
})

test("Hide values format", () => {
    expect(formatLableType(20, "", true)).toBe("******");
})

test("Don't hide currency values format", () => {
    const value = 20;
    expect(formatLableType(value, "currency", false))
        .toBe(value.toLocaleString("pt-br", { style: "currency", currency: "BRL" }));
})

test("Don't hide currency values format", () => {
    expect(formatLableType(20, "", false)).toBe(20);
})

// 'describe' é pra quando um agrupamento de testes é necessário
describe("set lable format type", () => {
    // 'it' cria o teste
    it("hidden number values", () => {
        expect(formatLableType(20, "", true)).toBe("******");
    })
    it("number values", () => {
        expect(formatLableType(20, "", false)).toBe(20);
    })
    it("currency values", () => {
        const value = 20;
        expect(formatLableType(value, "currency", false))
            .toBe(value.toLocaleString("pt-br", { style: "currency", currency: "BRL" }));
    })
    it("hidden currency values", () => {
        expect(formatLableType(20, "currency", true)).toBe("R$ ******");
    })
})