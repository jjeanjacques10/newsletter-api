import { v4 as uuidv4 } from 'uuid'

export const buildResponse = (news, update_date, source): String => {
    return news.map((newsItem, index) => {
        var date = new Date();

        if (newsItem[1] != '') {
            return {
                "uuid": uuidv4(newsItem[0]),
                "update_date": new Date(update_date).toISOString(),
                "title": newsItem[0],
                "content": newsItem[1],
                "source": source
            }
        }
    }).filter((newsItem) => newsItem != null);
}