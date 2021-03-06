import { Pledge } from "./pledge";

export const Pledges: Pledge[] = [
    {
        reward: "Bamboo Stand",
        minPledge: 25,
        rewardDescription: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list.`,
        spotsRemaining: 101
    },
    {
        reward: "Black Edition Stand",
        minPledge: 75,
        rewardDescription: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included.`,
        spotsRemaining: 64
    },
    {
        reward: "Mahogany Special Edition",
        minPledge: 200,
        rewardDescription: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.`,
        spotsRemaining: 0
    }
];

export const DefaultPledge: Pledge = {
    reward: "Pledge with no reward",
    rewardDescription: `Choose to support us without a reward if you simply believe in our project. As a backer, 
    you will be signed up to receive product updates via email.`,
    minPledge: 0,
    spotsRemaining: 0
}