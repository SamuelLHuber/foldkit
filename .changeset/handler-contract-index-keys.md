---
'foldkit': patch
---

Reduce type-checking work for Block handler contract validation. The conflict check now resolves the handler key index once per validated contract set instead of once per handler entry, so validation cost no longer grows quadratically with the number of child handlers. Conflict detection and its error messages are unchanged.
