This repo contains a sample implementation of reduce cycle using analogy of the process in insurance company. 

redux cycle : action creator -> action -> dispatch -> reducers -> state

analogy of insurance company example : 
forms(claim/create policy/ delete policy) => (action creator / actions)
-> form receiver => (dispatcher)
-> depts (claim/policy/accounts) => (reducers)
-> central dept repo => (store)