export default function StatTable(props) {
  const stats = props.stats;

  function cleanKey(key) {
    const splitKey = key.split("-");
    for (var i = 0; i < splitKey.length; i++) {
      splitKey[i] = splitKey[i].toUpperCase();
    }
    return splitKey.join(" ");
  }

  return (
    <>
      <div className="inline-block w-full bg-white shadow-md shadow-gray-200 mt-5 rounded-t-lg">
        <h2 className="text-3xl ml-10 font-bold my-3">Stats</h2>
      </div>
      <div className="bg-white rounded-b-lg flex">
        {stats.map((stat) => {
          return (
            <>
              <div className="grow flex flex-col">
                <div className="grow p-10 text-center">
                  <p className="border-b font-bold text-2xl py-2">
                    {cleanKey(stat.stat.name)}
                  </p>
                  <p className="font-bold text-3xl pt-2">{stat.base_stat}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
