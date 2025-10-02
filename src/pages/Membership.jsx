import React from "react";

const plans = [
	{
		name: "Monthly",
		price: "₹300",
		duration: "per month",
		benefits: [
			"Unlimited Gym Access",
			"1 Personal Training Session",
			"Diet Consultation",
			"Access to All Classes",
		],
	},
	{
		name: "Quarterly",
		price: "₹800",
		duration: "per 3 months",
		benefits: [
			"Unlimited Gym Access",
			"4 Personal Training Sessions",
			"Monthly Diet Consultation",
			"Priority Class Booking",
		],
		popular: true,
	},
	{
		name: "Yearly",
		price: "₹3,500",
		duration: "per year",
		benefits: [
			"Unlimited Gym Access",
			"12 Personal Training Sessions",
			"Quarterly Diet Consultation",
			"Free Gym Merchandise",
			"VIP Events Access",
		],
	},
];

export default function Membership() {
	return (
		<section className="py-16 bg-gray-50 text-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
					Membership Plans
				</h2>
				<div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-2 ${
								plan.popular
									? "border-blue-500 scale-105"
									: "border-gray-200"
							} transition`}
						>
							{plan.popular && (
								<span className="mb-2 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
									Most Popular
								</span>
							)}
							<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
							<div className="text-4xl font-extrabold mb-1">
								{plan.price}
							</div>
							<div className="text-gray-500 mb-4">{plan.duration}</div>
							<ul className="mb-6 space-y-2 text-left">
								{plan.benefits.map((benefit) => (
									<li key={benefit} className="flex items-center">
										<span className="text-green-500 mr-2">✔</span>
										{benefit}
									</li>
								))}
							</ul>
							<button className="mt-auto px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
								Join Now
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}