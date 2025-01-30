import { getTotalUserNumber, getUserInRange } from "../service/user.service.js";
import { PAGE_SIZE } from "../constants.js";

const getUsers = async (req, res) => {
  try {
    const page = Number(req.query.page);

    const userCount = await getTotalUserNumber();
    const users = await getUserInRange(page, PAGE_SIZE);

    const paginationData = {
      currentPage: page,
      hasNextPage: PAGE_SIZE * page < userCount,
      hasPreviousPage: page > 1,
      nextPage: page + 1,
      previousPage: page - 1,
      lastPage: Math.ceil(userCount / PAGE_SIZE),
    };

    res.json({ users, paginationData });
  } catch (err) {
    console.log(err);
  }
};

export default getUsers;
