import ErrorIcon from '../icons/ErrorIcon';
import WarningIcon from '../icons/WarningIcon';
import BellIcon from '../icons/BellIcon';
import CheckIcon from '../icons/CheckIcon';
import NextjsIcon from '../icons/NextjsIcon';
import SourceControlIcon from '../icons/SourceControlIcon';

export type Root = Root2[]

export interface Root2 {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: Label[]
  state: string
  locked: boolean
  assignee: any
  assignees: any[]
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  active_lock_reason: any
  body: string
  reactions: Reactions
  timeline_url: string
  performed_via_github_app: any
  state_reason: any
}

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Label {
  id: number
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string
}

export interface Reactions {
  url: string
  total_count: number
  "+1": number
  "-1": number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}


const Bottombar = async () => {
  const issuesURL = "https://api.github.com/repos/UoN-Computer-Science-Society/society-website/issues"
  const res = await fetch(issuesURL)
  let issuesJson: Root = JSON.parse(JSON.stringify(await res.json())) 

  return (
    <footer className="w-full fixed bottom-0 flex justify-between text-xs h-[25px] secondary-bg-color">
      <div className="flex items-center">
        <a
          href="https://github.com/UoN-Computer-Science-Society/society-website"
          target="_blank"
          rel="noreferrer noopener"
          className="flex mr-1 h-4 items-center px-1"
        >
          <SourceControlIcon className="mr-1" />
          <p>main</p>
        </a>
        <div className="flex mr-1 h-4 items-center px-1">
          <ErrorIcon className="mr-2" />
          <p>0</p>&nbsp;&nbsp;
          <WarningIcon className="mr-2" />
          <p>{issuesJson.length}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex mr-1 h-4 items-center px-1">
          <NextjsIcon className="mr-2" />
          <p>Powered by Next.js</p>
        </div>
        <div className="flex mr-1 h-4 items-center px-1">
          <CheckIcon className="mr-2" />
          <p>Prettier</p>
        </div>
        <div className="flex mr-1 h-4 items-center px-1">
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;