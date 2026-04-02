import email from "infra/email";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await orchestrator.deleteAllEmails();

    await email.send({
      from: "Thiago <thiago@teste.com>",
      to: "thiago.math@hotmail.com",
      subject: "Test de assunto",
      text: "Test de corpo",
    });
    await email.send({
      from: "Thiago <thiago@teste.com>",
      to: "thiago.math@hotmail.com",
      subject: "Ultimo email enviado",
      text: "Test de corpo do ultimo email",
    });

    const lastEmail = await orchestrator.getLastEmail();
    expect(lastEmail.sender).toBe("<thiago@teste.com>");
    expect(lastEmail.recipients[0]).toBe("<thiago.math@hotmail.com>");
    expect(lastEmail.subject).toBe("Ultimo email enviado");
    expect(lastEmail.text).toBe("Test de corpo do ultimo email\n");
  });
});
