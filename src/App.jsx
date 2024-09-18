import { Sidebar } from "./_components/Sidebar";
import { TwitterForm } from "./_components/TwitterForm";
import { Tweet } from "./_components/Tweet";
import { v4 } from "uuid";
import { getAvatar, getRadomImage } from "./utils/generate-image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "./_components/TrendItem";
import { FollowItem } from "./_components/FollowItem";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweet();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const addNewRandomTweet = () => {
    const randomTweets = [
      "Acabei de entrar no clone do Twitter! Estou animado para me conectar com todos aqui. 👋 #NovoUsuário",
      "Mais um dia, mais uma linha de código. Continuem avançando, colegas desenvolvedores! 💻 #VidaDeCodificação",
      "Quem mais vai ficar acordado até tarde para assistir à chuva de meteoros hoje à noite? 🌠 #CéuNoturno",
      "Lembrete: seja gentil consigo mesmo e com os outros. Um pouco de compaixão faz toda a diferença. ❤️ #Positividade",
      "Dica técnica do dia: sempre faça backup dos seus dados! Você vai agradecer a si mesmo mais tarde. 💾 #ConselhoTecnológico",
    ];

    const randomTweet =
      randomTweets[Math.floor(Math.random() * randomTweets.length)];

    AddNewTweet(randomTweet, Math.random() > 0.7);
  };

  useEffect(() => {
    console.log(tweets);
  }, [tweets]);

  const AddNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      userName: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@gmail.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRadomImage() : null,
      likes: 0,
      reTweet: 0,
      comments: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-r border-l border-gray-700 max-w-xl">
        <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
        </header>
        <TwitterForm
          onTweet={(content) => AddNewTweet(content, Math.random() > 0.5)}
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <aside className="hidden xl:block w-80 px-4">
        <div className="pt-2 top-0">
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="top-3 absolute left-3 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search Twitter"
              className="w-full bg-zinc-900 rounded-full outline-none py-2 pl-10 pr-4"
            />
          </div>
          <div className="rounded-xl bg-zinc-900 mt-4 p-4">
            <h2 className="font-bold mb-4 text-xl">Subscribe to Premium</h2>
            <p className="text-gray-500 mb-4 ">
              Subscribe to unlock a new features and if eligible, receive a
              share of ads revenue.
            </p>
            <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
              Subscribe
            </button>
          </div>

          <div className="bg-zinc-900 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Whats Happening</h2>
            <TrendItem category="NFL - LIVE" name="Cardinals at Bulls" />
            <TrendItem
              category="UCL - LIVE"
              name="Real Madrid at Stuttgart"
              tweetCount={12847}
            />
            <TrendItem
              category="UEL - LIVE"
              name="Roma at Tottenham"
              tweetCount={1736}
            />
            <TrendItem
              category="NBA - LIVE"
              name="Mavericks at LA Lackers"
              tweetCount={3615}
            />
          </div>

          <div className="bg-zinc-900 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Who to follow</h2>
            <FollowItem name="Guilherme Lopes" user="guiwwz" />
            <FollowItem name="Giovanna Lopes" user="gi_lopes" />
            <FollowItem name="Gustavo Silva" user="g.silva" />
            <FollowItem name="Ale Dulins" user="odulins" />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
