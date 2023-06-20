import { Avatar, Button, Tag, Text } from '@status-im/components'
import Link from 'next/link'

const issues = [
  {
    id: 5154,
    title: 'Add support for encrypted communities',
    status: 'Open',
  },
  {
    id: 5155,
    title: 'Add support for encrypted communities',
    status: 'Open',
  },
  {
    id: 4,
    title: 'Add support for encrypted communities',
    status: 'Open',
  },
  {
    id: 4324,
    title: 'Add support for encrypted communities',
    status: 'Open',
  },
  {
    id: 876,
    title: 'Add support for encrypted communities',
    status: 'Open',
  },
]

export const TableIssues = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-10">
      <div className="border-b border-neutral-10 bg-neutral-5 p-3">
        <Text size={15} weight="medium">
          784 Open
        </Text>
      </div>

      <div className="divide-y divide-neutral-10">
        {issues.map(issue => (
          <Link
            key={issue.id}
            href={`https://github.com/status-im/status-react/issues/${issue.id}`}
            className="flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:bg-neutral-5"
          >
            <div className="flex flex-col">
              <Text size={15} weight="medium">
                {issue.title}
              </Text>
              <Text size={13} color="$neutral-50">
                #9667 • Opened 2 days ago by slaedjenic
              </Text>
            </div>

            <div className="flex gap-3">
              <div className="flex gap-1">
                <Tag size={24} label="E:Syncing" color="$orange-50" />
                <Tag size={24} label="E:Wallet" color="$green-50" />
                <Tag size={24} label="Feature" color="$pink-50" />
                <Tag size={24} label="Web" color="$purple-50" />
              </div>

              <Tag size={24} label="9435" />

              <Avatar
                type="user"
                size={24}
                name="jkbktl"
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="p-3">
        <Button size={40} variant="outline">
          Show more 10
        </Button>
      </div>
    </div>
  )
}
