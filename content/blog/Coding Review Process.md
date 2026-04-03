+++
title = "Coding Review Process"
date = "2026-04-03"
tags = ["software"]
+++

## Evaluate the commits you make.

Do this as you code and commit. Paying attention here, spending an extra 5 minutes to deeply understand the changes you made - and refreshing your mind on previous commits - will save time and potential headache ten-fold later down the line.
### Questions to ask yourself
1. Does each commit make sense where it is?
2. Are the names of functions and variables correct?
3. Are the _diffs_ in the right place and in the correct order?
4. Does each commit compile and pass the tests?
5. What impact does each commit have?
## Review your own code

This should be done in a separate environment to the one you code in. For me, this could be GitHub (or any other online PR viewer), or in a local diff view.
### Questions to ask yourself
1. Does each commit _still_ make sense?
2. __High level overview__: Does it actually work? Are you wiring the correct functions to the correct place? We often miss the bigger picture when we're down in the code.
3. Does the architecture make sense? Are the functions you choose and the abstraction you made worth it?
4. Does it work E2E?
5. __Nits__. Do the names make sense, is the spacing correct. Less important, but still very important. If you can't understand your own code, how can others?

## Optional: Have AI review your code

You can use a good agent, with a good prompt, and access to your code base (it must be aware of coding style and general abstractions), to review your code. The agent should have some understand of the code base. Otherwise it might have to go and find it each time.

It will catch things you didn't think of, and act as a barrier between you and the reviewer, so that the reviewer has less to catch.
## Review from a reviewer

Hand the PR to another engineer in your team, who has an understand of the areas you've changed. This process is last, and takes the longest, so you want to arrive at this step having made sure that lower level errors have been corrected, and let the reviewer worry about higher level reviewing (although the reviewer should still pick things apart and comments their _nit picks_).