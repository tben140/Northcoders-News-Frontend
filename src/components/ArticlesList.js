import React from "react";
import AllArticles from "./AllArticles.js";
import CodingArticles from "./CodingArticles.js";
import FootballArticles from "./FootballArticles.js";
import CookingArticles from "./CookingArticles.js";
import NoMatch from "./NoMatch.js";

import { Router } from "@reach/router";

class ArticlesList extends React.Component {
  state = {
    articles: [
      {
        article_id: 33,
        title: "Seafood substitutions are increasing",
        body:
          "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
        votes: 0,
        topic: "cooking",
        author: "weegembump",
        created_at: "2018-05-30T15:59:13.341Z",
        comment_count: "6"
      },
      {
        article_id: 28,
        title: "High Altitude Cooking",
        body:
          "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.",
        votes: 0,
        topic: "cooking",
        author: "happyamy2016",
        created_at: "2018-05-27T03:32:28.514Z",
        comment_count: "5"
      },
      {
        article_id: 30,
        title:
          "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
        body:
          "What if, for once, your Thanksgiving sides were just as dazzling as the centerpiece turkey? Imagine a world where presenting a platter of seasonal vegetables inspires the same amount of cooing that the turkey does. Welcome to the world of twice-baked butternut squash. Sure, you could just roast some squash wedges and call it a day. But where's the fun in that? To make this year's most impressive vegetable side, Epi's food director Rhoda Boone gave super-seasonal butternut squash the twice-baked potatoes treatment: Mash the inside of the vegetable with butter, cream, and anything else that might make it more delicious, then pile it back into the vegetable, bake it until golden and velvety. The result is a jaw-dropping, brightly colored sweet-meet-savory butternut squash side dish. Here are just a few more reasons this creation belongs on this year's Thanksgiving table:",
        votes: 0,
        topic: "cooking",
        author: "jessjelly",
        created_at: "2018-05-06T02:40:35.489Z",
        comment_count: "8"
      }
    ],
    comments: [
      {
        comment_id: 115,
        author: "happyamy2016",
        article_id: 33,
        votes: 12,
        created_at: "2018-01-19T14:47:14.514Z",
        body:
          "Neque dolor sint illum id consequuntur debitis qui nam eum. Nam adipisci similique consequatur officiis. Totam qui enim at iste dolorem ullam. Tenetur laudantium sed facilis aspernatur occaecati. Provident rerum quia consectetur et. Molestiae eligendi commodi."
      },
      {
        comment_id: 272,
        author: "tickle122",
        article_id: 33,
        votes: 17,
        created_at: "2017-09-26T21:34:42.072Z",
        body:
          "Distinctio excepturi laboriosam eos aperiam quis amet eum animi minima. Officiis in quia. Est consequatur optio atque nostrum iusto impedit harum quod asperiores."
      },
      {
        comment_id: 196,
        author: "cooljmessy",
        article_id: 33,
        votes: 0,
        created_at: "2017-07-15T21:11:34.498Z",
        body:
          "Qui consequuntur id beatae ut vel a error. Vitae et et. Mollitia soluta neque quibusdam tempore quis quia eos autem magni. Voluptatibus numquam nostrum et enim officiis rerum. Optio quo harum dolore voluptatem sit temporibus rem voluptas rem."
      },
      {
        comment_id: 254,
        author: "weegembump",
        article_id: 33,
        votes: 16,
        created_at: "2017-04-20T19:55:25.295Z",
        body:
          "Cupiditate commodi delectus molestiae exercitationem iure eum error et. Et pariatur dolores assumenda explicabo ut ut rem. Magni molestiae veritatis illum."
      },
      {
        comment_id: 253,
        author: "tickle122",
        article_id: 33,
        votes: 3,
        created_at: "2016-10-10T10:31:10.823Z",
        body:
          "Expedita non veritatis dicta blanditiis ratione qui et. Corrupti sapiente accusantium molestiae vel nemo quia ullam. Ut distinctio aut autem fuga ullam et quod vero architecto. Sapiente voluptatem neque."
      },
      {
        comment_id: 154,
        author: "cooljmessy",
        article_id: 33,
        votes: 4,
        created_at: "2016-02-29T17:25:02.517Z",
        body:
          "Dolores qui illo et minima et facilis sunt. Enim velit sunt ut quae est ut."
      }
    ]
  };

  render() {
    //TODO: Refactor topic routing to use :topics instead
    return (
      <Router>
        <AllArticles path="/" />
        <CodingArticles path="/coding" />
        <FootballArticles path="/football" />
        <CookingArticles path="/cooking" />
        <NoMatch default />
      </Router>
    );
  }
}

export default ArticlesList;
