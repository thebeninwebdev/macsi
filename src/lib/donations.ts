// Existing MACSI programme figures. Update the uniform cost here when it changes.
export const UNIFORM_COST_NGN = 4500;
export const NEXT_SEMESTER_TARGET = 500;
export const DONATION_DESTINATION = "/#support";
export const MACSI_CONTACT = {
  whatsapp: "2348078675919",
  phone: "+2348078675919",
  displayPhone: "0807 867 5919",
  email: "bettyodigie456@gmail.com",
};
export const impact = { children: 100, schools: 12 };

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function donationMessage(uniforms?: number) {
  return uniforms
    ? `Hello! I'd like to donate NGN ${(UNIFORM_COST_NGN * uniforms).toLocaleString("en-NG")} to sew ${uniforms} ${uniforms === 1 ? "uniform" : "uniforms"}. How can I pay?`
    : "Hello! I'd like to give a custom amount to help sew school uniforms. How can I donate?";
}

export function whatsappDonationUrl(uniforms?: number) {
  return `https://wa.me/${MACSI_CONTACT.whatsapp}?text=${encodeURIComponent(donationMessage(uniforms))}`;
}
