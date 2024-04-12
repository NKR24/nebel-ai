export type ChangeEvent<
  T extends EventTarget = Element,
  E extends Event = Event,
> = E & { currentTarget: EventTarget & T }
