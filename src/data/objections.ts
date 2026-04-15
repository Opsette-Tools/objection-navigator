export type ToneLabel = 'Direct' | 'Soft' | 'Reframe' | 'Curious' | 'Value-focused';
export type ContextType = 'cold-call' | 'text' | 'email' | 'in-person' | 'follow-up';

export interface Response {
  id: string;
  text: string;
  tone: ToneLabel;
}

export interface Objection {
  id: string;
  label: string;
  keywords: string[];
  responses: Record<ContextType, Response[]>;
}

export const CONTEXTS: { key: ContextType; label: string }[] = [
  { key: 'cold-call', label: 'Cold Call' },
  { key: 'text', label: 'Text' },
  { key: 'email', label: 'Email' },
  { key: 'in-person', label: 'In Person' },
  { key: 'follow-up', label: 'Follow-up' },
];

export const objections: Objection[] = [
  {
    id: 'too-expensive',
    label: 'Too expensive',
    keywords: ['price', 'cost', 'expensive', 'budget', 'afford', 'cheap', 'money'],
    responses: {
      'cold-call': [
        { id: 'te-cc-1', text: "Totally fair — most of our clients felt the same way before they saw what it actually saved them. Can I walk you through a quick example?", tone: 'Soft' },
        { id: 'te-cc-2', text: "What are you comparing it to? I ask because a lot of people compare us to DIY options that end up costing more in time.", tone: 'Curious' },
        { id: 'te-cc-3', text: "If price is the main concern, we can look at a smaller scope to start. But honestly, the bigger cost is usually doing nothing.", tone: 'Reframe' },
      ],
      'text': [
        { id: 'te-tx-1', text: "Totally get it. Most clients say that before they see the ROI breakdown — want me to send it over?", tone: 'Soft' },
        { id: 'te-tx-2', text: "What would make the price feel worth it to you? Happy to see if we can adjust scope.", tone: 'Curious' },
        { id: 'te-tx-3', text: "Fair — but what's it costing you right now to not have this handled?", tone: 'Reframe' },
      ],
      'email': [
        { id: 'te-em-1', text: "I understand budget is a factor. To give you some context, most of our clients recoup the investment within the first 60 days. I'd be happy to share a few examples if that would help.", tone: 'Value-focused' },
        { id: 'te-em-2', text: "Appreciate you being upfront about that. We do offer flexible options — would it help if I put together a scaled-down proposal that fits your current budget?", tone: 'Soft' },
        { id: 'te-em-3', text: "Totally understand. One thing I'd encourage you to consider: what's the cost of the status quo? Most of our clients find that the real expense is the revenue they're leaving on the table.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'te-ip-1', text: "I hear you. Let me ask — is it the total price, or is it more about whether you'll see a return on it?", tone: 'Curious' },
        { id: 'te-ip-2', text: "That's fair. But here's what I've seen — the businesses that invest in this tend to grow faster than the ones that wait. What would make it a no-brainer for you?", tone: 'Direct' },
        { id: 'te-ip-3', text: "Totally understand. We can start smaller and scale up once you see results. No pressure.", tone: 'Soft' },
      ],
      'follow-up': [
        { id: 'te-fu-1', text: "Just circling back — I know price was a concern. I put together a comparison showing what our clients typically save vs. spend. Worth a quick look?", tone: 'Value-focused' },
        { id: 'te-fu-2', text: "Hey — wanted to check in. If budget is still tight, we have a lighter option that might work better as a starting point.", tone: 'Soft' },
        { id: 'te-fu-3', text: "Following up — have you had a chance to weigh the cost against what you're spending on the current setup? Happy to help you compare.", tone: 'Reframe' },
      ],
    },
  },
  {
    id: 'dont-need',
    label: "We don't need that",
    keywords: ['need', 'necessary', 'dont need', 'not needed', 'unnecessary'],
    responses: {
      'cold-call': [
        { id: 'dn-cc-1', text: "That's fair — most of our best clients said the same thing at first. What does your current setup look like for this?", tone: 'Curious' },
        { id: 'dn-cc-2', text: "Totally respect that. Out of curiosity, how are you handling [specific problem] right now?", tone: 'Soft' },
        { id: 'dn-cc-3', text: "Got it. A lot of businesses don't realize they need it until they see what they're missing. Can I show you a quick example?", tone: 'Reframe' },
      ],
      'text': [
        { id: 'dn-tx-1', text: "No worries! Just curious — how are you currently handling [specific area]?", tone: 'Curious' },
        { id: 'dn-tx-2', text: "Totally fair. Most people who say that are doing fine — but they're surprised when they see how much easier it could be.", tone: 'Reframe' },
      ],
      'email': [
        { id: 'dn-em-1', text: "Completely understand. I'd love to learn more about how you're currently managing this area — sometimes there are gaps that aren't obvious until someone points them out.", tone: 'Curious' },
        { id: 'dn-em-2', text: "That's fair. Many of our clients felt the same way initially. Would it be helpful if I shared a brief case study from a similar business?", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'dn-ip-1', text: "I get that. Walk me through how you're doing it now — I might see something you're not seeing.", tone: 'Direct' },
        { id: 'dn-ip-2', text: "Totally fair. But just between us — is it that you don't need it, or that it's not a priority right now? Those are different things.", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'dn-fu-1', text: "Hey — just following up. I know you mentioned you didn't need this, but I came across something that might change your mind. Two minutes?", tone: 'Soft' },
        { id: 'dn-fu-2', text: "Circling back — a business similar to yours just got started with us and saw results in the first week. Thought you'd want to know.", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'already-have',
    label: 'We already have something',
    keywords: ['already', 'have', 'existing', 'current', 'using', 'provider', 'agency'],
    responses: {
      'cold-call': [
        { id: 'ah-cc-1', text: "That's great — you're already investing in this. Are you happy with the results you're getting?", tone: 'Curious' },
        { id: 'ah-cc-2', text: "Glad to hear it. I'm not here to replace what's working — just curious if there are gaps I could help fill.", tone: 'Soft' },
        { id: 'ah-cc-3', text: "Good. What made you choose them? I ask because a lot of people end up switching once they compare.", tone: 'Direct' },
      ],
      'text': [
        { id: 'ah-tx-1', text: "Nice — are you happy with what you're getting? A lot of people have something but aren't thrilled with it.", tone: 'Curious' },
        { id: 'ah-tx-2', text: "No worries. If you ever want a second opinion or a comparison, I'm here.", tone: 'Soft' },
      ],
      'email': [
        { id: 'ah-em-1', text: "That's great to hear. I'm not looking to replace what's working — but I'd love to understand what you're using so I can see if there's anything complementary we could offer.", tone: 'Soft' },
        { id: 'ah-em-2', text: "Understood. Just out of curiosity — when was the last time you benchmarked your current solution? Markets shift quickly and what worked a year ago might be leaving value on the table.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'ah-ip-1', text: "That's good — means you already see the value. How's it performing for you? Because if it's working great, I'll back off. But if there's room for improvement, let's talk.", tone: 'Direct' },
        { id: 'ah-ip-2', text: "Love that you're already on top of this. Mind if I ask what your biggest frustration with the current setup is?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'ah-fu-1', text: "Hey — I know you mentioned you already have something in place. Just wanted to check — still happy with it, or has anything changed?", tone: 'Soft' },
        { id: 'ah-fu-2', text: "Following up — one of our clients recently switched from a similar setup and saw a 40% improvement. Want me to share the details?", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'facebook',
    label: 'We get clients through Facebook',
    keywords: ['facebook', 'social media', 'instagram', 'ads', 'meta', 'social'],
    responses: {
      'cold-call': [
        { id: 'fb-cc-1', text: "That's awesome — Facebook is great for reach. What happens when someone finds you there? What's the next step for them?", tone: 'Curious' },
        { id: 'fb-cc-2', text: "Nice. Are those leads converting the way you want, or do some fall off before they book?", tone: 'Direct' },
        { id: 'fb-cc-3', text: "Love that it's working. What we usually help with is what happens after someone finds you — making sure they actually convert.", tone: 'Reframe' },
      ],
      'text': [
        { id: 'fb-tx-1', text: "That's great! Are you converting most of those leads, or do some drop off?", tone: 'Curious' },
        { id: 'fb-tx-2', text: "Facebook's solid for awareness. What we help with is making sure those leads don't slip through the cracks.", tone: 'Reframe' },
      ],
      'email': [
        { id: 'fb-em-1', text: "Glad to hear Facebook is working for you. In my experience, social is great for visibility — but many businesses leave money on the table by not having a system to capture and convert those leads. That's where we come in.", tone: 'Value-focused' },
        { id: 'fb-em-2', text: "That's a strong channel. The question I'd ask is: what's your conversion rate from Facebook lead to paying client? If there's a gap, that's exactly what we help close.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'fb-ip-1', text: "That's great. But let me ask — if Facebook changed its algorithm tomorrow, what's your backup plan?", tone: 'Direct' },
        { id: 'fb-ip-2', text: "Facebook is a solid source. We actually work really well alongside it — we help you convert the traffic you're already getting.", tone: 'Soft' },
      ],
      'follow-up': [
        { id: 'fb-fu-1', text: "Hey — you mentioned Facebook was your main channel. Just curious — have your results been consistent, or have you noticed any dips?", tone: 'Curious' },
        { id: 'fb-fu-2', text: "Circling back — a lot of businesses using Facebook pair it with what we do and see even better results. Worth a quick chat?", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'think-about-it',
    label: 'I need to think about it',
    keywords: ['think', 'consider', 'decide', 'time', 'think about', 'mull'],
    responses: {
      'cold-call': [
        { id: 'ta-cc-1', text: "Totally fair. What specifically do you want to think through? I might be able to help answer that right now.", tone: 'Direct' },
        { id: 'ta-cc-2', text: "Of course. In my experience, 'I need to think about it' usually means there's a specific concern. What's yours?", tone: 'Curious' },
        { id: 'ta-cc-3', text: "No rush at all. Would it help if I sent you a quick summary so you have something to reference when you're ready?", tone: 'Soft' },
      ],
      'text': [
        { id: 'ta-tx-1', text: "Totally get it. Is there a specific part you're unsure about? Happy to clarify.", tone: 'Curious' },
        { id: 'ta-tx-2', text: "No pressure at all. Want me to follow up in a couple days?", tone: 'Soft' },
      ],
      'email': [
        { id: 'ta-em-1', text: "Completely understand — it's a decision worth considering carefully. If it would help, I'm happy to hop on a quick call to walk through any questions you have. Sometimes that makes the decision a lot easier.", tone: 'Soft' },
        { id: 'ta-em-2', text: "Of course. Just so I can be helpful — is there a specific part of the proposal you'd like more clarity on? I want to make sure you have everything you need to decide.", tone: 'Curious' },
      ],
      'in-person': [
        { id: 'ta-ip-1', text: "Absolutely. What's the main thing you're weighing? Let's talk through it.", tone: 'Direct' },
        { id: 'ta-ip-2', text: "For sure. Most people who say that have one specific concern. What's yours? I'd rather address it now than have it linger.", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'ta-fu-1', text: "Hey — just following up. Have you had a chance to think it over? Happy to answer any questions that came up.", tone: 'Soft' },
        { id: 'ta-fu-2', text: "Circling back — any questions I can clear up? Sometimes a quick conversation makes the decision way easier.", tone: 'Curious' },
      ],
    },
  },
  {
    id: 'send-info',
    label: 'Send me some information',
    keywords: ['send', 'info', 'information', 'brochure', 'details', 'email me'],
    responses: {
      'cold-call': [
        { id: 'si-cc-1', text: "Happy to. So I send you the right stuff — what specifically are you most interested in?", tone: 'Curious' },
        { id: 'si-cc-2', text: "Sure thing. But honestly, the info is pretty general. A five-minute conversation would tell you more than any PDF. Can we do a quick call this week?", tone: 'Direct' },
        { id: 'si-cc-3', text: "Absolutely. And just so it doesn't end up in the pile — what would make you actually open it and read it?", tone: 'Reframe' },
      ],
      'text': [
        { id: 'si-tx-1', text: "Sure! What's the best email? And is there anything specific you want me to highlight?", tone: 'Soft' },
        { id: 'si-tx-2', text: "Can do. But real talk — a 5-min call will tell you way more. Open to that?", tone: 'Direct' },
      ],
      'email': [
        { id: 'si-em-1', text: "Happy to send over more details. Before I do — can you tell me a bit about your current situation so I can tailor what I send? I don't want to bury you in generic material.", tone: 'Curious' },
        { id: 'si-em-2', text: "Of course. I've attached a brief overview. That said, the best way to see if we're a fit is usually a quick 10-minute call. Would you be open to that?", tone: 'Direct' },
      ],
      'in-person': [
        { id: 'si-ip-1', text: "Sure, I can do that. But before I go — what's the one thing you'd need to see in that info to move forward?", tone: 'Direct' },
        { id: 'si-ip-2', text: "Absolutely. Let me ask though — is there something specific holding you back, or do you genuinely want to review more details?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'si-fu-1', text: "Hey — I sent that info over last week. Did you get a chance to look it over? Happy to walk through it if that's easier.", tone: 'Soft' },
        { id: 'si-fu-2', text: "Following up on the info I sent. Most people find a quick call more helpful — want to set one up?", tone: 'Direct' },
      ],
    },
  },
  {
    id: 'maybe-later',
    label: 'Maybe later',
    keywords: ['later', 'not now', 'future', 'someday', 'next quarter', 'next year'],
    responses: {
      'cold-call': [
        { id: 'ml-cc-1', text: "Totally understand. When you say later — are we talking weeks, months? I just want to follow up at the right time.", tone: 'Curious' },
        { id: 'ml-cc-2', text: "Fair enough. Just so you know, most of our clients wish they'd started sooner. What would need to change for the timing to feel right?", tone: 'Reframe' },
        { id: 'ml-cc-3', text: "No problem. Can I check back in two weeks, or is there a better time?", tone: 'Soft' },
      ],
      'text': [
        { id: 'ml-tx-1', text: "Totally fine. When's a good time to circle back?", tone: 'Soft' },
        { id: 'ml-tx-2', text: "Got it. What would need to change for the timing to feel right?", tone: 'Curious' },
      ],
      'email': [
        { id: 'ml-em-1', text: "Completely understand. Timing matters. When would be a good time for me to follow up? I'd rather reach out when it's actually relevant for you.", tone: 'Soft' },
        { id: 'ml-em-2', text: "No problem at all. One thing I'd mention — the businesses that start now tend to be in a much stronger position by the time 'later' arrives. Just something to consider.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'ml-ip-1', text: "Sure thing. What would make 'later' turn into 'now' for you?", tone: 'Curious' },
        { id: 'ml-ip-2', text: "That's fair. But I'll be honest — I hear 'later' a lot, and it usually means 'I'm not convinced yet.' What would convince you?", tone: 'Direct' },
      ],
      'follow-up': [
        { id: 'ml-fu-1', text: "Hey — you mentioned the timing wasn't right before. Has anything changed on your end?", tone: 'Soft' },
        { id: 'ml-fu-2', text: "Just checking in — is now a better time, or should I circle back later?", tone: 'Curious' },
      ],
    },
  },
  {
    id: 'too-busy',
    label: "I'm too busy right now",
    keywords: ['busy', 'swamped', 'overwhelmed', 'no time', 'slammed', 'hectic'],
    responses: {
      'cold-call': [
        { id: 'tb-cc-1', text: "Totally get it — I'll keep this super quick. Can I have 60 seconds to see if it's even worth a longer conversation?", tone: 'Direct' },
        { id: 'tb-cc-2', text: "I respect that. When's a better time to catch you? I'll keep it brief.", tone: 'Soft' },
        { id: 'tb-cc-3', text: "That's actually exactly why I'm calling — most of our clients come to us because they're too busy to handle this stuff themselves.", tone: 'Reframe' },
      ],
      'text': [
        { id: 'tb-tx-1', text: "No worries. When's a better time to chat? I'll be quick.", tone: 'Soft' },
        { id: 'tb-tx-2', text: "Totally get it. Ironically, that's usually a sign you need this more, not less 😄 When can we grab 5 min?", tone: 'Reframe' },
      ],
      'email': [
        { id: 'tb-em-1', text: "Completely understand — I know your time is valuable. I'll keep this brief: we help busy business owners like you [specific benefit]. If that sounds relevant, let's find 15 minutes that work for you.", tone: 'Direct' },
        { id: 'tb-em-2', text: "No worries at all. I'll follow up in a couple of weeks. In the meantime, here's a quick overview in case you find a spare moment.", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'tb-ip-1', text: "I hear you. Quick question — is it that you're too busy to talk, or too busy to take on something new? Because what we do actually frees up your time.", tone: 'Curious' },
        { id: 'tb-ip-2', text: "Totally fair. Let me leave you with this one thing to think about — and I'll follow up when things calm down.", tone: 'Soft' },
      ],
      'follow-up': [
        { id: 'tb-fu-1', text: "Hey — I know you were slammed last time. Things still hectic, or is there room for a quick chat?", tone: 'Soft' },
        { id: 'tb-fu-2', text: "Just following up — still buried? If so, that might actually be the best reason to talk.", tone: 'Reframe' },
      ],
    },
  },
  {
    id: 'ask-partner',
    label: 'I need to ask my partner / team',
    keywords: ['partner', 'team', 'boss', 'husband', 'wife', 'spouse', 'cofounder', 'business partner'],
    responses: {
      'cold-call': [
        { id: 'ap-cc-1', text: "Makes sense. Would it help if I joined a quick call with both of you? That way your partner gets the full picture.", tone: 'Soft' },
        { id: 'ap-cc-2', text: "Totally understand. What do you think their main concern will be? I can help you address it.", tone: 'Curious' },
        { id: 'ap-cc-3', text: "Sure. Can I send you a one-page summary you can share with them? Makes the conversation easier.", tone: 'Value-focused' },
      ],
      'text': [
        { id: 'ap-tx-1', text: "Makes sense. What do you think they'll want to know? I can help you answer their questions.", tone: 'Curious' },
        { id: 'ap-tx-2', text: "Totally. Want me to put together a quick summary you can forward to them?", tone: 'Soft' },
      ],
      'email': [
        { id: 'ap-em-1', text: "Completely understand — it's a team decision. Would it be helpful if I prepared a brief summary that addresses common questions? That way your partner has the context they need.", tone: 'Value-focused' },
        { id: 'ap-em-2', text: "Of course. If it would be easier, I'm happy to set up a quick call with both of you so everyone's on the same page.", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'ap-ip-1', text: "Absolutely. What do you think their biggest concern will be? Let's talk through it now so you're prepared.", tone: 'Direct' },
        { id: 'ap-ip-2', text: "Sure. Is your partner involved in the day-to-day, or is this more of a financial decision for them?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'ap-fu-1', text: "Hey — did you get a chance to talk to your partner about it? Happy to answer any questions they had.", tone: 'Soft' },
        { id: 'ap-fu-2', text: "Following up — would it help if I set up a brief call with both of you? Sometimes that moves things along faster.", tone: 'Direct' },
      ],
    },
  },
  {
    id: 'enough-clients',
    label: 'We already have enough clients',
    keywords: ['enough', 'full', 'capacity', 'clients', 'booked', 'plenty'],
    responses: {
      'cold-call': [
        { id: 'ec-cc-1', text: "That's a great problem to have. Are they all the right kind of clients though? Or are some more headache than they're worth?", tone: 'Curious' },
        { id: 'ec-cc-2', text: "Congrats — that's not easy. What we usually help with at this stage is getting better clients, not just more of them.", tone: 'Reframe' },
        { id: 'ec-cc-3', text: "Nice. So you're in a position to be selective. What would your ideal client look like if you could choose?", tone: 'Curious' },
      ],
      'text': [
        { id: 'ec-tx-1', text: "That's awesome. Are they all the kind of clients you actually want?", tone: 'Curious' },
        { id: 'ec-tx-2', text: "Great position to be in. We usually help at this stage with getting higher-quality clients, not just more.", tone: 'Reframe' },
      ],
      'email': [
        { id: 'ec-em-1', text: "That's a strong position. At this stage, most businesses we work with aren't looking for more clients — they're looking for better ones. Higher value, easier to work with, and more consistent. Is that something you'd be interested in exploring?", tone: 'Reframe' },
        { id: 'ec-em-2', text: "Congratulations — that's no small feat. One thing I'd ask: what happens if a few of those clients leave? Having a steady pipeline means you're never scrambling.", tone: 'Value-focused' },
      ],
      'in-person': [
        { id: 'ec-ip-1', text: "Love to hear that. Are you turning people away, or are you stretched thin? Because those are very different situations.", tone: 'Direct' },
        { id: 'ec-ip-2', text: "That's awesome. But here's the thing — having enough clients now doesn't mean you will in six months. What's your pipeline look like?", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'ec-fu-1', text: "Hey — you mentioned you were fully booked. Still the case? Things can shift quickly in this business.", tone: 'Curious' },
        { id: 'ec-fu-2', text: "Just checking in. Even if you're full now, it might be worth setting up a system so you're never scrambling later.", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'do-manually',
    label: 'We do it manually now',
    keywords: ['manual', 'manually', 'ourselves', 'in-house', 'diy', 'do it ourselves', 'handle it'],
    responses: {
      'cold-call': [
        { id: 'dm-cc-1', text: "That takes dedication. How much time are you spending on it each week? Because that time has a cost.", tone: 'Curious' },
        { id: 'dm-cc-2', text: "Respect that. Most of our clients started that way too — they switched when they realized how much time they were losing.", tone: 'Reframe' },
        { id: 'dm-cc-3', text: "Totally fine if it's working. But if it's eating up hours that could go toward revenue — might be worth comparing.", tone: 'Value-focused' },
      ],
      'text': [
        { id: 'dm-tx-1', text: "How much time does that take you each week? Most people are surprised when they add it up.", tone: 'Curious' },
        { id: 'dm-tx-2', text: "Makes sense. We help people get that time back so they can focus on what actually makes money.", tone: 'Value-focused' },
      ],
      'email': [
        { id: 'dm-em-1', text: "That's great that you've been handling it in-house. One thing I'd encourage you to consider: what's your hourly rate? Because every hour spent on this is an hour not spent on revenue-generating work.", tone: 'Reframe' },
        { id: 'dm-em-2', text: "Understood. Many of our clients started the same way. The tipping point usually comes when they realize the manual approach doesn't scale. If you're interested, I can show you what the transition looks like.", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'dm-ip-1', text: "How's that going for you? Is it sustainable, or are you starting to feel the weight of it?", tone: 'Curious' },
        { id: 'dm-ip-2', text: "Nothing wrong with that. But let me ask — if you could get those hours back, what would you do with them?", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'dm-fu-1', text: "Hey — you mentioned you were handling this manually. Still going that route? Happy to show you how others have made the switch.", tone: 'Soft' },
        { id: 'dm-fu-2', text: "Just following up — have you noticed the manual approach slowing you down at all? That's usually when people reach out.", tone: 'Curious' },
      ],
    },
  },
  {
    id: 'not-ready',
    label: "I'm not ready to commit",
    keywords: ['commit', 'ready', 'commitment', 'contract', 'lock in', 'sign', 'decide'],
    responses: {
      'cold-call': [
        { id: 'nr-cc-1', text: "No problem. What would need to happen for you to feel ready? Let's talk through it.", tone: 'Curious' },
        { id: 'nr-cc-2', text: "Totally fine. There's no contract or long-term lock-in. We could start with something small and see how it goes.", tone: 'Soft' },
        { id: 'nr-cc-3', text: "That's fair. But here's the thing — waiting has a cost too. What's it costing you to not have this handled?", tone: 'Reframe' },
      ],
      'text': [
        { id: 'nr-tx-1', text: "No pressure. What would make you feel more comfortable? Happy to address any concerns.", tone: 'Soft' },
        { id: 'nr-tx-2', text: "Totally get it. We don't do long contracts — you can start small and see if it works.", tone: 'Value-focused' },
      ],
      'email': [
        { id: 'nr-em-1', text: "Completely understand. There's no pressure to commit right away. If it helps, we offer a flexible starting option with no long-term contract — just results. Would you be open to exploring that?", tone: 'Soft' },
        { id: 'nr-em-2', text: "That's fair. Most of our clients felt the same way before starting. What helped them was seeing a clear plan with measurable outcomes. Would a proposal along those lines be helpful?", tone: 'Value-focused' },
      ],
      'in-person': [
        { id: 'nr-ip-1', text: "What's holding you back? Let's get it on the table — I'd rather address it now than have it sit.", tone: 'Direct' },
        { id: 'nr-ip-2', text: "Fair enough. Is it the commitment itself, or is there a specific concern? Because we can structure this to minimize your risk.", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'nr-fu-1', text: "Hey — I know you weren't ready before. Has anything changed? No pressure, just checking in.", tone: 'Soft' },
        { id: 'nr-fu-2', text: "Following up — we've since added a no-commitment trial option that might work better for you. Interested?", tone: 'Value-focused' },
      ],
    },
  },
];
