int x = 42;
int y = 3;

int main()
{
  int *p = &x;
  const int *q = &x;
  int const *r = &x;
  int *const s = &x;
  int &t = x;
  const int &u = x;
  int const &v = x;
  int &const w = x;

  *p = 1;
  *q = 2;
  *r = 3;
  *s = 4;
  t = 5;
  u = 6;
  v = 7;
  w = 8;

  return 0;
}
