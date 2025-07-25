export async function checkPermissions(permissionName) {
  return async (req, res, next) => {
    const userPermissions = await getUserPermissions(req.user.id);

    if (!userPermissions.includes(permissionName)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}
