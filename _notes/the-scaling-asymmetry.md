---
layout: notes
title: The Scaling Asymmetry
date: 2026-05-15
---
The modern tech enabled startups is giving birth to a lot of innovative businesses.

On the consumer side, many businesses are doing cool things.

- Want to order food? Bingo! There's an app.
- Want to order groceries? There's an app.
- Want to order *healthy* groceries? There's a dedicated app for that too.

And not just on the consumer side in the B2B space too. For instance,

- Want to get insurance for your employees? Bingo!
- Want someone to maintain the office plants? Bingo!

There are many such high-visibility businesses, solving extremely niche problems.

## Technology drives demand generation

Demand generation today is heavily driven by platforms over the internet. Branding and marketing levers are used offline too, of course, but the objective of all of them is the same: bring the customer onto your product, platform, app, or website.

And on the technical side, this scales remarkably well. Modern engineering can handle staggering numbers:

- Zomato’s food business has above 800 Mn orders in a year
- Rapido does approx 700 Mn rides in a year
- Instamart and Blinkit have over a thousand micro-warehouses (dark stores)
- The entire quick commerce industry handled above a billion orders in the last financial year

The list is long. This is the cool component.

## But there's an less visible constraint

Code scales very quickly (almost instantly) and globally. On the other hand, the operations scale linearly with capex, hiring, and ground execution, that’s usually one region at a time.
Wherever supply is offline, you are constrained. You always have to ensure the balance of supply to meet the demand. If you generate the demand but fail to fulfill it, you're brewing a soup for long-term distrust or in modern parlance, bad user experience.

Supply means dealing with people, storage, and transportation.

Imagine this: it's morning, you open your go-to quick commerce app to order milk and groceries. Two scenarios may unfold:

1. You place an order as usual. The ETA was the usual number you ignored, something under 30 minutes. But even after 30 minutes, the status still reads *"your order is being packed."*
2. The app shows the service as unavailable, so you either switch to another platform or walk to the nearby shop.

Both happen for the same reason: *an imbalance between supply and demand.*

It's not that products are out of stock. Rather, the number of delivery executives required to fulfill orders within the expected time is not enough. Now imagine this problem at the scale at which online commerce operates in India.

A few examples we encounter regularly:

1. Surge pricing
2. Unserviceable restaurants
3. Rain fees and peak-hour surcharges

All of these are signs of the same underlying problem: demand outrunning what supply can fulfill.

## Why supply is genuinely hard

On an abstract level, the problem is a simple inequality. In practice, it isn't.

The shape of the problem depends a lot on what *kind* of supply you're dealing with:

- **Fixed node** (quick commerce dark stores, domestic help workers): the workforce is dedicated and localized to a region and operates only within it.
- **Dynamic node** (food delivery, cab services): the supply itself moves and isn't tied to a single area.

Each calls for a different playbook. A fixed-node business has to forecast demand for one specific polygon. A dynamic-node business has to forecast *and* route in real time. Either way, planning and forecasting become paramount and it's a Sisyphean task. You can never be in a state of reliable predictions.

## Two ways to respond: ration the demand, or expand the supply

Faced with this constraint, modern businesses essentially do one of two things.

**Ration the demand.** When you can't grow supply fast enough, you make demand smaller, slower, or more expensive:

1. Surge pricing algorithms
2. Minimum basket value during peak hours
3. Serviceability switch-off, sometimes partial, based on payment mode

These aren't really *solutions*. They're admissions that supply couldn't keep up, dressed up nicely for the user.

**Expand the effective supply.** This is where the more interesting innovation happens:

1. **Supply localization:** more, smaller supply nodes, concentrated closer to users.
2. **Batching:** combining as many orders as possible to deliver at optimal speed without compromising UX.
3. **Scheduled dispatch:** what Amazon Fresh has been doing for a long time. In hindsight, a very clever strategy. Milk Basket, Country Delight, and similar players have been doing this for a while too.

The bigger lever, by far, is the second one. Rationing protects the brand in the short term; expanding supply is how you actually win.

## What comes next

From an infrastructure and tech lens, we aren't there yet, but I believe drones and robots will enter this space, especially in sortation and last-mile delivery. 

When that happens, the businesses that win won't be the ones with the cleverest algorithm. They'll be the ones that figured out how to give the best post order experience in the fastest way possible.
