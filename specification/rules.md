# Tribes

## Rules

### Resources (per minute?, max level?)
- `townhall` generates 10 food + 10 gold per level per minute, can store 1000 food and 1000 gold per level
- `mine` generates 10 gold per level per minute
- `farm` generates 10 food per level per minute
- `troop` eats 1 food per minute

### Troops
- You can buy troops in `barracks` for 10 gold, hp: 10*`barracks lvl` att: 1 def: 1
- Training troops cost 5 gold, the trained troop gain +1 attack or +1 defence
- Queue troops training *optional*: buying or training a troop take 1 minute, 1 barrack can upgrade/create only one per level at a time

### Buildings
- A new building costs 250 gold, upgrading one costs 100*lvl gold
- Upgrading to a certain level is allowed only if the `townhall` already reached that level (max `townhall` level = 20)
- Buildings can have rules to make new content available achieving specific level:
	- Resource generation value increased after upgrade
	- After Barracks upgrade:
		- *optional:* Training queue limit can be increased every 5 levels
		- Defensive buildings have higher attack and defend value after upgrade (incereases by 1 every level)
	- After townhall upgrade:
		- New upgrades are available for other buildings (max level of other buildings is the level of the town hall)
		- Storage limit is higher
