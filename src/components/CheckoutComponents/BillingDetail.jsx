import BillingForm from "./BillingForm";
const BillingDetail = () => {
  return (
    <div className="flex flex-col gap-6 max-w-96 font-body">
      <h1 className="text-3xl sm:text-4xl font-bold">Billing Details</h1>
      <div className="flex flex-col sm:flex-row gap-4 max-w-96">
        <BillingForm title="First Name" placeholder="" />
        <BillingForm title="Last Name" placeholder="" />
      </div>
      <BillingForm title="Company Name (Optional)" placeholder="" />
      <BillingForm title="Country / Region" placeholder="Sri Lanka" />
      <BillingForm title="Street address" placeholder="" />
      <BillingForm title="Town / City" placeholder="" />
      <BillingForm title="Province" placeholder="Western Province" />
      <BillingForm title="ZIP code" placeholder="" />
      <BillingForm title="Phone" placeholder="" />
      <BillingForm title="Email address" placeholder="" />
    </div>
  );
};
export default BillingDetail;
