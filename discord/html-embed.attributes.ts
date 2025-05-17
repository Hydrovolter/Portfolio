type url = string

interface Attributes {
  // Server + channel IDs
  server: string
  channel?: string

  // Thread ID
  thread?: string

  // Dynamic username and avatar
  username?: string
  avatar?: url

  // JWT login
  token?: string

  // Enables notifications for messages in other channels
  notifications?: boolean
  // Embed notification timeout
  notificationtimeout?: number

  // The height and width. You can specify a number to
  // use pixels or use CSS units eg. 100%
  width?: number | string
  height?: number | string

  // Connect to a custom WidgetBot server (Only set this if you are explicitly told to)
  shard?: url
}

export default Attributes