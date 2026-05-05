---
layout: notes
title: Why is no one happy in the ride hailing business?
date: 2026-05-05
---
Ride hailing has evolved from a premium, logistics-heavy service — with a few high-asset agencies or individuals — to a very democratised model in India. In an abstract sense, anyone with a vehicle that can carry at least one passenger is eligible to be onboarded to a ride hailing marketplace. This includes everything from e-rickshaws, two-wheelers, autos, cars, shuttle services, and boats too.

- Uber entered India as far back as 2014-2015
- Ola has been around for a long time as well
- And yet, today in Bangalore, Rapido turns out to be the more reliable service provider, with a key trade-off of safety

Ride hailing is a marketplace, but it has two primary actors. There's the user, the driver, the platform connecting the two, and an implicit actor — the regulator and the union.

## Who is unhappy, and why

**Users** struggle with three things:

- Availability — long waits and difficulty finding a ride
- Quality — inconsistent safety and reliability
- Pricing — high per-trip cost

In theory, the premium users pay should be enough to solve these problems. In practice, more and more planned trips are being taken over by private providers — individuals or agencies that own fleets or partner directly with drivers.

Drivers struggle, and have low comprehension for:

- Earnings per trip
- High dead miles (distance covered between rides without a paying passenger)
- Confusion around take rates, penalties, and final take-home pay

**Platforms** are bleeding too:

- Uber India has lost money for a decade
- Ola has gone through layoffs, a bumpy IPO, and multiple pivots
- Rapido is growing fast, but unit economics remain unclear
- No Indian aggregator has been durably profitable at scale
- Drivers multi-home across Uber, Ola, Rapido, and Namma Yatri simultaneously, cherry-picking the best rides

The ride sharing business, in its existing design, has a sustainability problem.

## The two business models

To understand this further, I'll break down the two most common business models in ride hailing.

1. **Commission-based model** — The platform charges a commission as a % of money collected from the user per trip by the driver.
2. **Subscription-based model** — The platform does not charge a commission; instead, it charges a flat fee for the software subscription.

The first favours the platform, as earnings grow with more trips. The second favours the drivers.

Under consumer sovereignty, demand sets the direction and competition forces supply to follow.

But Indian ride hailing has discovered something — commission economics get capped by driver multi-homing and union pressure. Subscription economics get capped by how much a driver will pay for software. On top of both, regulators have layered fare caps, surge limits, and state-level aggregator guidelines.

The result: Rapido and Namma Yatri run subscription. Uber is testing both. 

The underlying problem is a two fold designing the right incentives for drivers, while offering the best pricing and user experience. Subscription causes the aggregators to take the loss. 

## Ride pricing in the subscription model

Pricing for the rider is independent of how the platform charges the driver. Both commission and subscription models can use:

- Distance + time fares (the base structure)
- Surge / dynamic multipliers
- Bidding (Primary or Add-On)

What changes is **who captures the surge**.

- *Commission model*: when surge fires, fare goes up, and the platform takes its 20–30% cut on the higher fare. Both parties benefit — the platform especially.
- *Subscription model*: surge fires, fare goes up, and the driver keeps 100%. The platform earns the same flat subscription fee regardless. Surge becomes a pure driver-side incentive — the platform offers it not for direct margin, but because it clears the market.

Surge applies to subscription models. Rapido and Namma Yatri both use dynamic pricing. The reason platforms still bother: without surge, supply collapses during peak demand and rider experience degrades, killing the long-term subscription business. Surge in a subscription model is a *coordination tool*, not a revenue tool.

This is also why Rapido and Ola added "Flexi Fare" in autos, which lets the rider name their price. In a subscription world, the platform doesn't care which exact fare clears, only that *some* fare clears. So letting riders and drivers negotiate the number directly is rational. In a commission world, the platform would never allow this — it would lose pricing power.

## Why does behaviour change with geography

This space is treating ride hailing as a software product. It's a regulated, locally embedded service masquerading as software.

**Goa** — Uber and Ola don't operate. Tourists bring revenue but no votes. The state runs Goa Miles, a local app.

**SEA (Grab / Gojek)** — Uber lost to them for three reasons:

1. **Cash** — Grab accepted cash from day one when Uber required cards. Drivers in Asia needed daily payouts. (Also, a great moat of Meesho)
2. **Vehicle mix** — Grab built around motorbikes and cheap taxis. Uber pushed expensive black cars.
3. **Super-app bundling** — Grab and Gojek bundled rides with payments, food, groceries, and financial services. Uber stayed mono-line. By 2018, Uber sold its SEA business to Grab for a 27% stake.

## Balance between supply and demand

Why is there a skew between supply and demand? Wouldn't the reverse also be true? In tier 2 cities, how does supply happen, and how does it balance demand?

- The "supply problem" isn't really a supply problem, in metros atleast. There are enough autos in Bangalore. The actual problem is the **matching process. I**ncentive alignment between drivers, platform, and riders, given asymmetric information.
- The cold-start problem in private transport has two flavours, and they're often confused:
    1. Launching a new platform in an existing market (Namma Yatri) — this is a multi-homing and take-rate problem, not a density problem.
    2. Launching ride hailing in a tier 2/3 city — this is a density problem. Not enough drivers and riders on the app at the same time for matching to work.

---

Follow up Reads:

- https://pages.stern.nyu.edu/~adamodar/pdfiles/blog/RideSharing.pdf
- [Policy Mandala#34 Why You Can’t Get an Uber in Goa (and Why That Matters): Goa’s Gamble with Platform Policy You’re standing at the Dabolim airport exit, bags in hand, in vacation mode and eager to visit the beach. With the sea just 40 minutes away, you can almost hear the waves and feel the sand already…Read more10 months ago · 11 likes · Policy Mandala | India House](https://mandalapolicy.substack.com/p/34-why-you-cant-get-an-uber-in-goa?utm_source=substack&utm_campaign=post_embed&utm_medium=web)
    
    ![](https://substackcdn.com/image/fetch/$s_!UtST!,w_56,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ec068ee-874d-493d-9f95-f0ef578e5a87_400x400.png)
    
- https://the-ken.com/newsletters/two-by-two/rapido-broke-the-uber-ola-duopoly-can-it-now-break-the-swiggy-zomato-one/
- https://the-ken.com/story/rapido-rips-up-the-uber-ola-playbook-for-cabs/
