import { formatDate } from "@/lib/helpers";
import Link from "next/link";

export default function StaticContentList({ entries, urlPrefix }) {
    return (
        <table>
            <tbody>
                {entries.map((e) => (
                    <tr key={e.slug}>
                        <td>{!!e.attributes.pubdate && <span>{formatDate(e.attributes.pubdate)}</span>}</td>
                        <td>
                            <Link href={`${urlPrefix}${e.slug}`}>{e.attributes.title}</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}