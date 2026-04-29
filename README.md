# Food Expiry Tracker

A smart expiry tracking Progressive Web App built for 
retail convenience stores like 7-Eleven.

## The Problem
## The Problem
At store level, expiry tracking for perishable items 
is entirely manual. Staff physically mark expiry dates 
by hand and check every shift to see if items have expired.

Perishable items tracked include:
- Fresh sandwiches and wraps
- Muffins, cakes and slices
- Flavoured milk and dairy products
- Ready meals and meal bowls
- Hot pastry rolls and pies
- Fresh bread loaves

Non-perishable items such as chips, chocolates, 
juices, energy drinks and confectionery are 
NOT tracked — these have long shelf lives and 
do not require shift-by-shift monitoring.

This manual process has no connection to stock levels —
staff rush to discount or remove an item only to 
discover it was already sold, making the check 
completely wasted effort.

There is no system that tells staff:
→ What perishable items are expiring today or tomorrow
→ Whether that item is still on the shelf
→ Whether action is actually needed

## The Solution
An expiry tracking system that links delivery data with 
sales data. An alert only fires if stock is actually 
remaining on the shelf.

## How It Works
1. Manager uploads daily delivery docket
2. System auto-calculates expiry dates using:
   Delivery Date + Shelf Life = Expiry Date
3. Staff log sales from shift report
4. Smart alerts fire ONLY when stock remains AND expiry is near
5. Staff see clean alert view on store tablet

## User Roles
- Manager → uploads dockets, manages shelf life settings
- Staff → views alerts and takes action only

## Tech Stack
- Frontend: React (JavaScript)
- Backend: Python (FastAPI)
- Database: PostgreSQL
- Deployment: Progressive Web App (PWA)

## Status
Currently in active development — learning and building 
simultaneously.

## Developer
Built by praj28-dev
Master of IT — Data Science, QUT
